import { useState } from 'react'

import Section from '@shared/Section'
import ImageViewer from '@components/ImageViewer/ImageViewer'
import generateImageUrl from '@/utils/generateImageUrl'

import style from './ImageGallery.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx != -1

  const handleSelectedIdx = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <Section className={cx('container')} title="사진첩">
      <ul className={cx('gallery')}>
        {images.map((img, idx) => (
          <li key={img} onClick={() => handleSelectedIdx(idx)}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: img,
                  format: 'webp',
                  option: 'w_240,h_240,q_auto,c_fill',
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: img,
                  format: 'jpg',
                  option: 'w_240,h_240,q_auto,c_fill',
                })}
                alt="wedding"
              />
            </picture>
          </li>
        ))}
      </ul>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </Section>
  )
}

export default ImageGallery
