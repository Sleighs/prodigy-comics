'use client'

import dynamic from 'next/dynamic'
import CarouselLoading from './CarouselLoading'

const HeroCarousel = dynamic(() => import('./HeroCarousel'), {
  loading: () => <CarouselLoading />,
  ssr: false
})

export default function DynamicHeroCarousel() {
  return <HeroCarousel />
}