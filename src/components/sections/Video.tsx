import style from './Video.module.scss'
import classNames from 'classnames/bind'

import Section from '@shared/Section'

const cx = classNames.bind(style)

function Video() {
  return (
    <Section className={cx('container')}>
      <video
        className={cx('video')}
        poster="/assets/poster.jpg"
        muted
        autoPlay
        loop
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
