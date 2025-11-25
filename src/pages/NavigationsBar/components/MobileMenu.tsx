import { AnimatePresence, motion } from 'framer-motion'
import { Link } from '@/layout'
import { Column, Header, Nav } from '@/layout'
import { LogoButton, MobileAccountButton, MobileCartButton, MobileCloseButton } from '../ui'
import type { NavigationsLinksData } from '../data'

type MobileMenuProps = {
    data: typeof NavigationsLinksData;
    mobileMenuOpen: boolean;
    closeMenu: () => void;
    totalItems: number;
};

const MobileMenu:React.FC<MobileMenuProps> = ({ data, mobileMenuOpen, closeMenu, totalItems}) =>
{
  return (
      <AnimatePresence>
          { mobileMenuOpen && (
              <>
                  <motion.div
                      initial={ { opacity: 0 } }
                      animate={ { opacity: 1 } }
                      exit={ { opacity: 0 } }
                      transition={ { duration: 0.3 } }
                      className="fixed inset-0 z-60 md:hidden"
                      onClick={ closeMenu }
                  />

                  <motion.div
                      initial={ { x: '100%' } }
                      animate={ { x: 0 } }
                      exit={ { x: '100%' } }
                      transition={ { type: 'tween', duration: 0.3 } }
                      className="fixed bottom-0 right-0 top-0 z-70 w-full overflow-y-auto bg-white md:hidden"
                  >
                      <Column className=" h-full ">
                          {/* Header */ }
                          <Header className="flex items-center justify-between border-b w-full safe-area-padding py-4">
                              <LogoButton onClick={ closeMenu } />
                              <MobileCloseButton closeMenu={ closeMenu } />
                          </Header>

                          {/* Navigation */ }
                          <Nav className="flex-1 w-full py-6 safe-area-padding">
                              <Column className="space-y-1">
                                  {data.map(({ href, text }) => (
                                      <Link key={href} to={href} className="block py-4 text-2xl transition-opacity hover:opacity-70" onClick={ closeMenu } text={text} />
                                  ))}
                                 <Column className="mt-6 border-t pt-6">
                                      <MobileCartButton totalItems={ totalItems } closeMenu={ closeMenu } />
                                      <MobileAccountButton closeMenu={ closeMenu } />
                                  </Column>
                              </Column>
                          </Nav>
                      </Column>
                  </motion.div>
              </>
          ) }
      </AnimatePresence>
  )
}

export default MobileMenu