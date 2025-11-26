import { useState } from 'react'
import type { CheckoutPayload, CheckoutResponse } from '@/types'

const MOCK_PROVIDER = 'LocalMockCheckout'
const MOCK_DELAY_MS = 300

const wait = ( duration: number ): Promise<void> =>
  new Promise( ( resolve ) => setTimeout( resolve, duration ) )

const buildMockCheckoutResponse = (
  payload: CheckoutPayload
): CheckoutResponse =>
{
  const now = new Date().toISOString()
  const orderId = `MOCK-${ Date.now() }`
  const currency = payload.totals.currency ?? 'eur'

  return {
    order: {
      _id: orderId,
      customer: payload.customer,
      items: payload.items,
      totals: { ...payload.totals, currency },
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
      await wait( MOCK_DELAY_MS )
      return buildMockCheckoutResponse( payload )
    } catch ( unknownError )
    {
      const message =
        unknownError instanceof Error
          ? unknownError.message
          : 'Unbekannter Fehler'
      setError( message )
      throw new Error( message )
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
