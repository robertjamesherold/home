import { MetaBadge } from '../../assets/badges'
import { SocialIcon } from '../../assets/icons'
import { Section, Row, Column, Grid, Hr } from '../'
import { useWindowSize } from '../../hooks/useWindowSize'

const Footer:React.FC = () => {

const list = [{
    listheader: 'Über mich', 
    list: ['Meine Story', 'Skills & Technologien', 'Lebenslauf' ]
    },{
    listheader: 'Portfolio', 
    list: ['Projekte', 'Fallstudien', 'GitHub' ]
    },{
    listheader: 'Kontakt', 
    list: ['Kontakt aufnehmen', 'E-Mail schreiben', 'Verfügbarkeit' ]
    }]

    const {width} = useWindowSize()

    return (
        <footer className='w-screen bg-blue-100/25 py-8'>
            <Column className='gap-4'>
                <Section>
                    <Grid className='gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shrink-0'>
                        {list.map((group, groupIndex) => (
                            <Column className='w-full'>
                                <ul key={groupIndex} className="text-left border-collapse mb-4">
                                    <li>
                                        <h4 className="text-xl font-bold p-2">{group.listheader}</h4>
                                    </li>
                                        {group.list.map((item, itemIndex) => (
                                            <li key={itemIndex} className="p-2 w-full">
                                                <a href="#" className="text-amber-500 w-full hover:underline hover:text-amber-400">
                                                    {item}
                                                </a>
                                            </li>)
                                            )
                                        }
                                    </ul>
                            </Column>
                        ))}
                    </Grid>
                </Section>
                <Hr />
                <Section>
                    <Row className='w-min sm:ml-0 flex-wrap sm:flex-nowrap gap-4'>
                        <Row className='w-min gap-4'>
                            <MetaBadge/>
                        </Row>
                        <Row className='w-fit gap-4'>   
                            <SocialIcon icon='GitHub' size={60}/>
                            <SocialIcon icon='LinkedIn' size={60}/>
                            <SocialIcon icon='Mail' size={60}/>
                        </Row>
                    </Row>
                </Section>
                <Hr />
                <Section>
                    {width <= 768 ? 
                    <Column className='gap-2'>
                        <Row className='w-full'>
                            <p>© 2025 Robert James Herold. Entwickelt mit React.</p>
                        </Row>
                        <Row className='w-fit'>
                            <nav>
                                <ul className='flex flex-row gap-4'>
                                    <li>
                                        <a className='cursor-pointer hover:underline'>Datenschutz</a>
                                    </li>
                                    <li>
                                        <a className='cursor-pointer hover:underline'>Impressum</a>
                                    </li>
                                </ul>
                            </nav>
                        </Row>
                    </Column>
                : <Row className='gap-2'>
                        <Row className='w-full'>
                            <p>© 2025 Robert James Herold. Entwickelt mit React.</p>
                        </Row>
                        <Row className='w-fit'>
                            <nav>
                                <ul className='flex flex-row gap-4'>
                                    <li>
                                        <a className='cursor-pointer hover:underline'>Datenschutz</a>
                                    </li>
                                    <li>
                                        <a className='cursor-pointer hover:underline'>Impressum</a>
                                    </li>
                                </ul>
                            </nav>
                        </Row>
                    </Row>}
                </Section>
            </Column> 
        </footer>
    )
}

export default Footer