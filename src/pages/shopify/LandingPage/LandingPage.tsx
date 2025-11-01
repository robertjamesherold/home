import React from 'react';
import imgImage from "@images/Article.png"
import imgImage1 from "@images/Article.png"
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Title } from '@/typography'

function HeadlineDesktop ()
{
  return (
    <header data-name="Headline">
      <Title text='Kunden schauten auch' level={ 6 } />
    </header>
  )
}
function ImageDesktop ()
{
  return (
    <div className="h-[103.5px] relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage } />
      </div>
    </div>
  )
}

function ItemDesktop ()
{
  return (
    <figure className="bg-white box-border content-stretch flex flex-col items-start justify-center overflow-visible pl-0 pr-[16px] py-0 size-full" data-name="Item">
      <ImageDesktop />
    </figure>
  )
}

function ImageDesktop1 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemDesktop1 ()
{
  return (
    <figure className="box-border content-stretch flex flex-col items-start justify-center overflow-visible pl-0 pr-[16px] py-0 size-full" data-name="Item">
      <ImageDesktop1 />
    </figure>
  )
}

function ImageDesktop11 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemDesktop11 ()
{
  return (
    <figure className="box-border content-stretch flex flex-col items-start justify-center overflow-visible pl-0 pr-[36px] py-0 size-full" data-name="Item">
      <ImageDesktop11 />
    </figure>
  )
}

function ListDesktop ()
{
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
        <ul className="box-border content-stretch flex items-center px-[36px] py-0 relative w-full">
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop />
          </li>
          <li className="relative shrink-0 w-[202px]">
            <ItemDesktop1 />
          </li>
          <li className="relative shrink-0 w-[220px]">
            <ItemDesktop11 />
          </li>
        </ul>
      </div>
    </div>
  )
}

function SectionDesktop ()
{
  return (
    <section className="box-border content-stretch flex flex-col items-start p-0 relative size-full" data-name="Section">
      <HeadlineDesktop />
      <ListDesktop />
    </section>
  )
}

function HeadlineTablet ()
{
  return (
    <header className="relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center pb-[8px] pl-[24px] pr-0 pt-0 relative w-full">
          <div className="flex flex-col font-['Amazon_Ember:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
            <h3 className="block leading-[18.667px] whitespace-pre">Kunden schauten auch</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

function ArticleTablet ()
{
  return (
    <div className="h-[103.5px] relative rounded-[8px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage } />
      </div>
    </div>
  )
}

function ItemTablet ()
{
  return (
    <figure className="bg-white box-border content-stretch flex items-center overflow-visible pl-0 pr-[8px] py-0 size-full" data-name="Item">
      <ArticleTablet />
    </figure>
  )
}

function ArticleTablet1 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemTablet1 ()
{
  return (
    <figure className="box-border content-stretch flex items-center overflow-visible pl-0 pr-[8px] py-0 size-full" data-name="Item">
      <ArticleTablet1 />
    </figure>
  )
}

function ArticleTablet11 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemTablet11 ()
{
  return (
    <figure className="box-border content-stretch flex items-center overflow-visible pl-0 pr-[24px] py-0 size-full" data-name="Item">
      <ArticleTablet11 />
    </figure>
  )
}

function ListTablet ()
{
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip size-full">
        <ul className="box-border content-stretch flex items-center pl-[24px] pr-[16px] py-0 relative w-full">
          <li className="relative shrink-0">
            <ItemTablet />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet />
          </li>
          <li className="relative shrink-0">
            <ItemTablet1 />
          </li>
          <li className="relative shrink-0">
            <ItemTablet11 />
          </li>
        </ul>
      </div>
    </div>
  )
}

function SectionTablet ()
{
  return (
    <section className="box-border content-stretch flex flex-col items-start p-0 relative size-full" data-name="Section">
      <HeadlineTablet />
      <ListTablet />
    </section>
  )
}

function HeadlineMobile ()
{
  return (
    <header className="max-w-[375px] relative shrink-0 w-full" data-name="Headline">
      <div className="flex flex-row items-center max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center max-w-inherit pb-[8px] pl-[16px] pr-0 pt-0 relative w-full">
          <div className="flex flex-col font-['Amazon_Ember:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
            <h3 className="block leading-[18.667px] whitespace-pre">Kunden schauten auch</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

function ArticleMobile ()
{
  return (
    <div className="h-[103.5px] relative rounded-[8px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage } />
      </div>
    </div>
  )
}

function ItemMobile ()
{
  return (
    <figure className="bg-white box-border content-stretch flex items-center overflow-visible pl-0 pr-[8px] py-0 size-full" data-name="Item">
      <ArticleMobile />
    </figure>
  )
}

function ArticleMobile1 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemMobile1 ()
{
  return (
    <figure className="box-border content-stretch flex items-center overflow-visible pl-0 pr-[8px] py-0 size-full" data-name="Item">
      <ArticleMobile1 />
    </figure>
  )
}

function ArticleMobile11 ()
{
  return (
    <div className="h-[103.5px] relative rounded-[12px] shrink-0 w-[184px]" data-name="Article">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={ imgImage1 } />
      </div>
    </div>
  )
}

function ItemMobile11 ()
{
  return (
    <figure className="box-border content-stretch flex items-center overflow-visible pl-0 pr-[16px] py-0 size-full" data-name="Item">
      <ArticleMobile11 />
    </figure>
  )
}

function ListMobile ()
{
  return (
    <div className="max-w-[375px] relative shrink-0 w-full" data-name="List">
      <div className="flex flex-row items-center max-w-inherit overflow-x-auto overflow-y-clip size-full">
        <ul className="box-border content-stretch flex items-center max-w-inherit px-[16px] py-0 relative w-full">
          <li className="relative shrink-0">
            <ItemMobile />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0">
            <ItemMobile />
          </li>
          <li className="relative shrink-0">
            <ItemMobile1 />
          </li>
          <li className="relative shrink-0 w-[200px]">
            <ItemMobile11 />
          </li>
        </ul>
      </div>
    </div>
  )
}

function SectionMobile ()
{
  return (
    <section className="box-border content-stretch flex flex-col items-start p-0 relative size-full" data-name="Section">
      <HeadlineMobile />
      <ListMobile />
    </section>
  )
}

function Section ()
{
  const breakpoint = useBreakpoint()
  if ( breakpoint === 'xs' )
  {
    return <SectionMobile />
  }
  if ( breakpoint === 'sm' )
  {
    return <SectionTablet />
  }
  return <SectionDesktop />
}



export const LandingPage: React.FC = () =>
{
  return (
    <Section />
  )
}


