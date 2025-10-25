import React, { useState } from 'react'
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft, Check, Minus, Plus, Share2 } from 'lucide-react'

interface Review
{
  id: number
  author: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

const ProductDetailPage: React.FC = () =>
{
  const [ selectedImage, setSelectedImage ] = useState( 0 )
  const [ selectedSize, setSelectedSize ] = useState( 'M' )
  const [ selectedColor, setSelectedColor ] = useState( 'Black' )
  const [ quantity, setQuantity ] = useState( 1 )
  const [ activeTab, setActiveTab ] = useState<'description' | 'reviews' | 'shipping'>( 'description' )
  const [ isFavorite, setIsFavorite ] = useState( false )

  const product = {
    id: 1,
    title: "Premium Wireless Headphones Pro",
    price: "299.99",
    originalPrice: "399.99",
    discount: 25,
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop"
    ],
    sizes: [ 'S', 'M', 'L', 'XL' ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Blue', hex: '#3B82F6' },
      { name: 'Red', hex: '#EF4444' }
    ],
    description: "Experience unparalleled audio quality with our Premium Wireless Headphones Pro. Featuring advanced noise cancellation technology, 40-hour battery life, and premium materials for ultimate comfort. Perfect for music lovers, travelers, and professionals.",
    features: [
      "Active Noise Cancellation (ANC)",
      "40-hour battery life",
      "Premium leather ear cushions",
      "Bluetooth 5.3 connectivity",
      "Multi-device pairing",
      "Built-in microphone for calls",
      "Foldable design with carry case",
      "Hi-Res Audio certified"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 40kHz",
      "Impedance": "32 Ohms",
      "Weight": "250g",
      "Bluetooth Version": "5.3",
      "Charging Time": "2 hours",
      "Battery Life": "40 hours (ANC off), 30 hours (ANC on)"
    }
  }

  const reviews: Review[] = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely amazing sound quality! The noise cancellation is incredible. Worth every penny.",
      verified: true
    },
    {
      id: 2,
      author: "Michael R.",
      rating: 4,
      date: "1 month ago",
      comment: "Great headphones, very comfortable for long sessions. Battery life is as advertised.",
      verified: true
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      date: "1 month ago",
      comment: "Best purchase I've made this year. The build quality is premium and they look stunning!",
      verified: true
    }
  ]

  const handleQuantityChange = ( type: 'increase' | 'decrease' ) =>
  {
    if ( type === 'increase' )
    {
      setQuantity( prev => prev + 1 )
    } else if ( type === 'decrease' && quantity > 1 )
    {
      setQuantity( prev => prev - 1 )
    }
  }

  const renderStars = ( rating: number ) =>
  {
    return [ ...Array( 5 ) ].map( ( _, index ) => (
      <Star
        key={ index }
        className={ `w-5 h-5 ${ index < Math.floor( rating ) ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }` }
      />
    ) )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */ }
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Shop</span>
            </button>

            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopifyStore
              </h1>
            </div>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */ }
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images */ }
          <div className="space-y-4">
            {/* Main Image */ }
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-square">
              <img
                src={ product.images[ selectedImage ] }
                alt={ product.title }
                className="w-full h-full object-cover"
              />
              { product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  -{ product.discount }%
                </div>
              ) }
              <button
                onClick={ () => setIsFavorite( !isFavorite ) }
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
              >
                <Heart
                  className={ `w-6 h-6 ${ isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
                    }` }
                />
              </button>
            </div>

            {/* Thumbnail Images */ }
            <div className="grid grid-cols-4 gap-4">
              { product.images.map( ( image, index ) => (
                <button
                  key={ index }
                  onClick={ () => setSelectedImage( index ) }
                  className={ `relative bg-white rounded-lg overflow-hidden aspect-square border-2 transition ${ selectedImage === index
                      ? 'border-purple-600 shadow-lg'
                      : 'border-gray-200 hover:border-purple-300'
                    }` }
                >
                  <img src={ image } alt={ `View ${ index + 1 }` } className="w-full h-full object-cover" />
                </button>
              ) ) }
            </div>
          </div>

          {/* Right: Product Info */ }
          <div className="space-y-6">
            {/* Title and Rating */ }
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{ product.title }</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  { renderStars( product.rating ) }
                </div>
                <span className="text-gray-600 font-semibold">{ product.rating }</span>
                <span className="text-gray-400">({ product.reviewCount } reviews)</span>
              </div>
            </div>

            {/* Price */ }
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-purple-600">${ product.price }</span>
              { product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">${ product.originalPrice }</span>
              ) }
            </div>

            {/* Stock Status */ }
            <div className="flex items-center space-x-2">
              { product.inStock ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-semibold">In Stock</span>
                </>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              ) }
            </div>

            {/* Description */ }
            <p className="text-gray-600 leading-relaxed">{ product.description }</p>

            {/* Color Selection */ }
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Color: <span className="text-purple-600">{ selectedColor }</span>
              </label>
              <div className="flex space-x-3">
                { product.colors.map( ( color ) => (
                  <button
                    key={ color.name }
                    onClick={ () => setSelectedColor( color.name ) }
                    className={ `relative w-12 h-12 rounded-full border-2 transition ${ selectedColor === color.name
                        ? 'border-purple-600 shadow-lg scale-110'
                        : 'border-gray-300 hover:border-purple-300'
                      }` }
                    style={ { backgroundColor: color.hex } }
                  >
                    { selectedColor === color.name && (
                      <Check className="absolute inset-0 m-auto w-6 h-6 text-white" />
                    ) }
                  </button>
                ) ) }
              </div>
            </div>

            {/* Size Selection */ }
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Size: <span className="text-purple-600">{ selectedSize }</span>
              </label>
              <div className="flex space-x-3">
                { product.sizes.map( ( size ) => (
                  <button
                    key={ size }
                    onClick={ () => setSelectedSize( size ) }
                    className={ `px-6 py-3 rounded-lg border-2 font-semibold transition ${ selectedSize === size
                        ? 'border-purple-600 bg-purple-600 text-white'
                        : 'border-gray-300 hover:border-purple-300'
                      }` }
                  >
                    { size }
                  </button>
                ) ) }
              </div>
            </div>

            {/* Quantity */ }
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={ () => handleQuantityChange( 'decrease' ) }
                    className="p-3 hover:bg-gray-100 transition"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 font-semibold text-lg">{ quantity }</span>
                  <button
                    onClick={ () => handleQuantityChange( 'increase' ) }
                    className="p-3 hover:bg-gray-100 transition"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */ }
            <div className="space-y-3">
              <button className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition font-bold text-lg flex items-center justify-center space-x-2">
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <button className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition font-bold text-lg">
                Buy Now
              </button>
              <button className="w-full border-2 border-gray-300 py-4 rounded-lg hover:border-purple-300 transition font-semibold flex items-center justify-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share Product</span>
              </button>
            </div>

            {/* Trust Badges */ }
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Check className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold">Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */ }
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          {/* Tab Headers */ }
          <div className="flex space-x-8 border-b">
            <button
              onClick={ () => setActiveTab( 'description' ) }
              className={ `pb-4 font-semibold transition ${ activeTab === 'description'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
                }` }
            >
              Description
            </button>
            <button
              onClick={ () => setActiveTab( 'reviews' ) }
              className={ `pb-4 font-semibold transition ${ activeTab === 'reviews'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
                }` }
            >
              Reviews ({ product.reviewCount })
            </button>
            <button
              onClick={ () => setActiveTab( 'shipping' ) }
              className={ `pb-4 font-semibold transition ${ activeTab === 'shipping'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
                }` }
            >
              Shipping & Returns
            </button>
          </div>

          {/* Tab Content */ }
          <div className="mt-8">
            { activeTab === 'description' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Product Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    { product.features.map( ( feature, index ) => (
                      <li key={ index } className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{ feature }</span>
                      </li>
                    ) ) }
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    { Object.entries( product.specifications ).map( ( [ key, value ] ) => (
                      <div key={ key } className="flex justify-between py-2 border-b">
                        <span className="font-semibold text-gray-700">{ key }:</span>
                        <span className="text-gray-600">{ value }</span>
                      </div>
                    ) ) }
                  </div>
                </div>
              </div>
            ) }

            { activeTab === 'reviews' && (
              <div className="space-y-6">
                { reviews.map( ( review ) => (
                  <div key={ review.id } className="border-b pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-bold text-gray-900">{ review.author }</span>
                          { review.verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                              <Check className="w-3 h-3" />
                              <span>Verified</span>
                            </span>
                          ) }
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">{ renderStars( review.rating ) }</div>
                          <span className="text-sm text-gray-500">{ review.date }</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{ review.comment }</p>
                  </div>
                ) ) }

                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
                  Write a Review
                </button>
              </div>
            ) }

            { activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Shipping Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We offer free standard shipping on all orders over $50. Orders are typically processed within 1-2 business days and delivered within 5-7 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Return Policy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We accept returns within 30 days of purchase. Items must be in original condition with tags attached. Refunds will be processed within 5-10 business days of receiving the returned item.
                  </p>
                </div>
              </div>
            ) }
          </div>
        </div>
      </main>

      {/* Footer */ }
      <footer className="bg-white mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">Built with React, TypeScript & Tailwind CSS</p>
          <p className="text-sm">Demonstrating Shopify Product Page Design</p>
        </div>
      </footer>
    </div>
  )
}

export default ProductDetailPage