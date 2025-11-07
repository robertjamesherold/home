import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '../ui/button'
import AndreaMeyer from '@/assets/logos/AndreaMeyer'

const Navigation: React.FC = () =>
{
  const [ isOpen, setIsOpen ] = useState( false )

  const toggleMenu = () =>
  {
    setIsOpen( !isOpen )
  }

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Über uns', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ">

        <div className="flex justify-between items-center h-16 safe-area-padding">
          {/* Logo */ }
          <div className="shrink-0">
            <AndreaMeyer className="text-xs" />
          </div>

          {/* Desktop Navigation */ }
          <div className="hidden md:flex md:items-center md:space-x-8">
            { menuItems.map( ( item ) => (
              <a
                key={ item.label }
                href={ item.href }
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                { item.label }
              </a>
            ) ) }
            <Button>Jetzt starten</Button>
          </div>

          {/* Mobile Menu Button */ }
          <div className="md:hidden">
            <button
              onClick={ toggleMenu }
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menü öffnen"
            >
              { isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" /> }
            </button>
          </div>
          </div>
      </nav >

      {/* Mobile Fullscreen Menu */ }
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={ { x: '100%' } }
              animate={ { x: 0 } }
              exit={ { x: '100%' } }
              transition={ { type: 'tween', duration: 0.3 } }
              className="fixed inset-0 z-40 bg-white md:hidden"
              style={ { top: '64px' } }
            >
              <div className="flex flex-col h-full px-4 py-8">
                <nav className="flex-1">
                  <ul className="space-y-6">
                    { menuItems.map( ( item, index ) => (
                      <motion.li
                        key={ item.label }
                        initial={ { opacity: 0, x: 20 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { delay: index * 0.1 } }
                      >
                        <a
                          href={ item.href }
                          onClick={ toggleMenu }
                          className="block text-gray-900 hover:text-blue-600 transition-colors duration-200"
                        >
                          { item.label }
                        </a>
                      </motion.li>
                    ) ) }
                  </ul>
          </nav>

                <div className="pt-6 border-t border-gray-200">
                  <Button className="w-full" onClick={ toggleMenu }>
                    Jetzt starten
                  </Button>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >

    </>
  )
}

export default Navigation