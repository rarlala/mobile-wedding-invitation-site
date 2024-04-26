import { memo } from 'react'
import { DayPicker } from 'react-day-picker'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import Section from '@shared/Section'

import classNames from 'classnames/bind'
import 'react-day-picker/dist/style.css'
import style from './Calendar.module.scss'

const css = `
    .rdp-caption {
        display: none !important;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: transparent;
    }
    .rdp-head_cell {
        font-weight: 500;
        font-size: 14px;
        font-weight: bold;
    }
    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
        color: #fff;
    }
    .rdp-day_selected:hover {
        background-color: var(--red);
    }
`

const cx = classNames.bind(style)

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          month={weddingDate}
          selected={weddingDate}
          locale={ko}
          formatters={{ formatCaption: () => '' }}
          disableNavigation
        />
      </div>
    </Section>
  )
}

export default memo(Calendar)
