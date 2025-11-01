import React from 'react';
import imgImage from '@images/Article.png';
import imgImage1 from '@images/Article.png';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title } from '@/typography';

function HeadlineDesktop() {
  return (
    <header data-name="Headline">
      <Title text="Kunden schauten auch" level={6} />
    </header>
  );
}
function ImageDesktop() {
  return (
    <div
      className="relative aspect-[16/9] h-36 w-64 overflow-hidden rounded-xl"
      data-name="Image"
    >
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        src={imgImage}
      />
    </div>
  );
}

function ItemDesktop() {
  return (
    <figure
      className="box-border flex size-full flex-col content-stretch items-start justify-center overflow-visible bg-white py-0 pl-0 pr-[16px]"
      data-name="Item"
    >
      <ImageDesktop />
    </figure>
  );
}

function ImageDesktop1() {
  return (
    <div
      className="relative h-[103.5px] w-full shrink-0 rounded-[12px]"
      data-name="Image"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function ListDesktop() {
  return (
    <div
      className="flex w-screen justify-start overflow-x-scroll"
      data-name="List"
    >
      <ul className="float-container relative inline-flex flex-row">
        <div className="h-12 w-12 bg-gray-200">hi </div>
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <ItemDesktop />
        <div className="w-12" />
      </ul>
    </div>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative box-border flex size-full flex-col content-stretch items-start p-0"
      data-name="Section"
    >
      <HeadlineDesktop />
      <ListDesktop />
    </section>
  );
}

function HeadlineTablet() {
  return (
    <header className="relative w-full shrink-0" data-name="Headline">
      <div className="flex size-full flex-row items-center overflow-clip rounded-[inherit]">
        <div className="relative box-border flex w-full content-stretch items-center pb-[8px] pl-[24px] pr-0 pt-0">
          <div className="relative flex shrink-0 flex-col justify-center text-nowrap font-['Amazon_Ember:Bold',sans-serif] text-[16px] not-italic leading-[0] text-black">
            <h3 className="block whitespace-pre leading-[18.667px]">
              Kunden schauten auch
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArticleTablet() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[8px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage}
        />
      </div>
    </div>
  );
}

function ItemTablet() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible bg-white py-0 pl-0 pr-[8px]"
      data-name="Item"
    >
      <ArticleTablet />
    </figure>
  );
}

function ArticleTablet1() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[12px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function ItemTablet1() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible py-0 pl-0 pr-[8px]"
      data-name="Item"
    >
      <ArticleTablet1 />
    </figure>
  );
}

function ArticleTablet11() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[12px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function ItemTablet11() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible py-0 pl-0 pr-[24px]"
      data-name="Item"
    >
      <ArticleTablet11 />
    </figure>
  );
}

function ListTablet() {
  return (
    <div className="relative w-full shrink-0" data-name="List">
      <div className="flex size-full flex-row items-center overflow-x-auto overflow-y-clip">
        <ul className="relative flex flex-row">
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet />
          </li>
          <li className="">
            <ItemTablet1 />
          </li>
        </ul>
      </div>
    </div>
  );
}

function SectionTablet() {
  return (
    <section
      className="relative box-border flex size-full flex-col content-stretch items-start p-0"
      data-name="Section"
    >
      <HeadlineTablet />
      <ListTablet />
    </section>
  );
}

function HeadlineMobile() {
  return (
    <header
      className="relative w-full max-w-[375px] shrink-0"
      data-name="Headline"
    >
      <div className="max-w-inherit flex size-full flex-row items-center overflow-clip rounded-[inherit]">
        <div className="max-w-inherit relative box-border flex w-full content-stretch items-center pb-[8px] pl-[16px] pr-0 pt-0">
          <div className="relative flex shrink-0 flex-col justify-center text-nowrap font-['Amazon_Ember:Bold',sans-serif] text-[16px] not-italic leading-[0] text-black">
            <h3 className="block whitespace-pre leading-[18.667px]">
              Kunden schauten auch
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArticleMobile() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[8px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage}
        />
      </div>
    </div>
  );
}

function ItemMobile() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible bg-white py-0 pl-0 pr-[8px]"
      data-name="Item"
    >
      <ArticleMobile />
    </figure>
  );
}

function ArticleMobile1() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[12px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function ItemMobile1() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible py-0 pl-0 pr-[8px]"
      data-name="Item"
    >
      <ArticleMobile1 />
    </figure>
  );
}

function ArticleMobile11() {
  return (
    <div
      className="relative h-[103.5px] w-[184px] shrink-0 rounded-[12px]"
      data-name="Article"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[12px]">
        <img
          alt=""
          className="absolute left-0 top-0 size-full max-w-none"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function ItemMobile11() {
  return (
    <figure
      className="box-border flex size-full content-stretch items-center overflow-visible py-0 pl-0 pr-[16px]"
      data-name="Item"
    >
      <ArticleMobile11 />
    </figure>
  );
}

function ListMobile() {
  return (
    <div className="relative w-full max-w-[375px] shrink-0" data-name="List">
      <div className="max-w-inherit flex size-full flex-row items-center overflow-x-auto overflow-y-clip">
        <ul className="relative flex flex-row">
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="">
            <ItemMobile />
          </li>
          <li className="relative w-[200px] shrink-0">
            <ItemMobile11 />
          </li>
        </ul>
      </div>
    </div>
  );
}

function SectionMobile() {
  return (
    <section
      className="relative box-border flex size-full flex-col content-stretch items-start p-0"
      data-name="Section"
    >
      <HeadlineMobile />
      <ListMobile />
    </section>
  );
}

function Section() {
  const breakpoint = useBreakpoint();
  if (breakpoint === 'xs') {
    return <SectionMobile />;
  }
  if (breakpoint === 'sm') {
    return <SectionTablet />;
  }
  return <SectionDesktop />;
}

export const LandingPage: React.FC = () => {
  return <Section />;
};
