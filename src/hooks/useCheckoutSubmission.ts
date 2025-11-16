import { useState } from 'react'
import type { CheckoutPayload, CheckoutResponse } from '@/types'

const MOCK_PROVIDER = 'LocalMockCheckout'
const MOCK_LATENCY_MS = 500

const wait = ( duration: number ): Promise<void> =>
  new Promise( ( resolve ) => setTimeout( resolve, duration ) )

const createMockCheckoutResponse = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> =>
{
  await wait( MOCK_LATENCY_MS )

  const now = new Date().toISOString()
  const randomSuffix = Math.random().toString( 36 ).slice( 2, 8 ).toUpperCase()
  const orderId = `MOCK-${ Date.now().toString().slice( -4 ) }${ randomSuffix }`
  const currency = payload.totals.currency ?? 'eur'

  return {
    order: {
      _id: orderId,
      customer: payload.customer,
      items: payload.items,
      totals: {
        ...payload.totals,
        currency,
      },
      payment: {
        method: payload.paymentMethod,
        provider: MOCK_PROVIDER,
        status: 'succeeded',
        externalReference: orderId,
      },
      createdAt: now,
      updatedAt: now,
      persisted: false,
    },
    payment: {
      provider: MOCK_PROVIDER,
      status: 'succeeded',
      intentId: orderId,
      clientSecret: null,
      message: 'Zahlung erfolgreich simuliert.',
    },
  }
}

export const useCheckoutSubmission = () =>
{
  const [ isSubmitting, setIsSubmitting ] = useState( false )
  const [ error, setError ] = useState<string | null>( null )

  const submitCheckout = async ( payload: CheckoutPayload ) =>
  {
    setIsSubmitting( true )
    setError( null )

    try
    {
      return await createMockCheckoutResponse( payload )
    } catch ( err )
    {
      const message =
        err instanceof Error ? err.message : 'Unbekannter Fehler'
      setError( message )
      throw err instanceof Error ? err : new Error( message )
    } finally
    {
      setIsSubmitting( false )
    }
  }

  return {
    submitCheckout,
    isSubmitting,
    error,
  }
}
