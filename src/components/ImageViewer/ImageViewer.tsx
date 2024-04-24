import { useEffect, useRef } from 'react'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import style from './ImageViewer.module.scss'
import classNames from 'classnames/bind'

import 'swiper/css'
import './swiper.css'

const cx = classNames.bind(style)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  const swiper = useRef<SwiperClass | null>(null)

  const handleSwiper = (newSwiper: SwiperClass) => {
    swiper.current = newSwiper
  }

  useEffect(() => {
    if (swiper.current) {
      swiper.current.slideTo(selectedIdx)
    }
  }, [selectedIdx])

  return (
    <div className={cx('dimmed', open && 'open')}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        initialSlide={selectedIdx}
        loop={true}
        onSwiper={handleSwiper}
      >
        {images.map((src) => {
          return (
            <SwiperSlide key={src}>
              <img src={src} alt="wedding" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <CloseButton onClose={onClose} />
    </div>
  )
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <svg
      enableBackground="new 0 0 128 128"
      id="Layer_1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
      className={cx('ico-close')}
    >
      <g>
        <g>
          <path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z" />
        </g>
      </g>
    </svg>
  )
}

export default ImageViewer