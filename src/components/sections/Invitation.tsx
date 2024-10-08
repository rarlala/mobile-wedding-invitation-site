import Section from '@shared/Section'

import style from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Text from '../shared/Text'

const cx = classNames.bind(style)

function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <IconMessage className={cx('ico-message')} />
      <Text>{message}</Text>
    </Section>
  )
}

function IconMessage({ className }: { className: string }) {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x36_07_x2C__Mail_box_x2C__Mail_x2C__love_x2C__letter_x2C__letter_box">
        <g>
          <rect
            height={54.37}
            style={{
              fill: '#FFC592',
            }}
            width={73.49}
            x={309.37}
            y={63.68}
          />
          <polygon
            points="317.48,71.828 382.86,71.828 382.86,63.68 309.37,63.68 309.37,118.05 317.48,118.05   "
            style={{
              fill: '#E8AB7E',
            }}
          />
          <path
            d="M313.426,68.68c-2.24,0-4.056-2.239-4.056-5V45.56c0-2.761,1.815-5,4.056-5    c2.239,0,4.055,2.239,4.055,5v18.12C317.48,66.441,315.665,68.68,313.426,68.68z"
            style={{
              fill: '#E8AB7E',
            }}
          />
          <path
            d="M313.426,177.42c-2.24,0-4.056-2.239-4.056-5v-54.37c0-2.761,1.815-5,4.056-5    c2.239,0,4.055,2.239,4.055,5v54.37C317.48,175.181,315.665,177.42,313.426,177.42z"
            style={{
              fill: '#E8AB7E',
            }}
          />
          <rect
            height={90.609}
            style={{
              fill: '#415A6B',
            }}
            width={63.431}
            x={265.06}
            y={380.83}
          />
          <polygon
            points="272.727,389.496 328.49,389.496 328.49,380.83 265.06,380.83 265.06,471.439     272.727,471.439   "
            style={{
              fill: '#304551',
            }}
          />
          <rect
            height={36.25}
            style={{
              fill: '#516B7A',
            }}
            width={63.431}
            x={265.06}
            y={344.58}
          />
          <polygon
            points="274.88,353.912 328.49,353.912 328.49,344.58 265.06,344.58 265.06,380.83 274.88,380.83       "
            style={{
              fill: '#415A6B',
            }}
          />
          <polygon
            points="174.45,237.66 174.45,317.4 111.02,317.4 65.71,317.4 65.71,237.66 120.08,281.15   "
            style={{
              fill: '#FFD55E',
            }}
          />
          <g>
            <polygon
              points="73.085,243.559 65.71,237.66 65.71,317.4 73.085,317.4    "
              style={{
                fill: '#E8BB49',
              }}
            />
          </g>
          <polygon
            points="174.45,237.66 120.08,281.15 65.71,237.66 65.71,235.85 111.02,235.85 174.45,235.85   "
            style={{
              fill: '#FFC230',
            }}
          />
          <polygon
            points="83.377,244.326 83.377,242.516 128.687,242.516 168.379,242.516 174.45,237.66     174.45,235.85 111.02,235.85 65.71,235.85 65.71,237.66 120.08,281.15 124.747,277.418   "
            style={{
              fill: '#E8A51F',
            }}
          />
          <path
            d="M213.46,197.69v146.89H166.9h-55.88V317.4h63.43V237.66v-1.81h-63.43v-38.16    c0-14.49,5.73-27.6,15-37.09c9.27-9.5,22.08-15.37,36.22-15.37c1.57,0,3.12,0.09,4.66,0.23    C193,147.87,213.46,170.33,213.46,197.69z"
            style={{
              fill: '#743629',
            }}
          />
          <g>
            <path
              d="M120.08,209.19c0-14.49,5.73-27.6,15-37.09c9.27-9.5,22.08-15.37,36.22-15.37     c1.57,0,3.12,0.09,4.66,0.23c11.665,1.077,22.196,6.167,30.285,13.902c-8.189-14.05-22.601-23.856-39.345-25.402     c-1.54-0.14-3.09-0.23-4.66-0.23c-14.14,0-26.95,5.87-36.22,15.37c-9.27,9.49-15,22.6-15,37.09v38.16h9.06V209.19z"
              style={{
                fill: '#602B22',
              }}
            />
          </g>
          <path
            d="M387.87,199.6c12.25,0,22.17,9.1,22.17,20.31c0,20.31-22.17,31.87-44.31,52.18    c-22.15-20.31-44.29-31.87-44.29-52.18c0-11.21,9.92-20.31,22.14-20.31c11.08,0,16.61,5.08,22.15,15.23    C371.26,204.68,376.8,199.6,387.87,199.6z"
            style={{
              fill: '#EF3E5C',
            }}
          />
          <g>
            <g>
              <g>
                <path
                  d="M332.19,225.35c0-11.21,9.92-20.31,22.14-20.31c1.709,0,3.271,0.136,4.736,0.377       c-3.919-3.874-8.643-5.817-15.486-5.817c-12.22,0-22.14,9.1-22.14,20.31c0,20.31,22.14,31.87,44.29,52.18       c0.743-0.682,1.487-1.354,2.229-2.016C348.989,254.095,332.19,243.041,332.19,225.35z"
                  style={{
                    fill: '#E42A53',
                  }}
                />
              </g>
            </g>
          </g>
          <path
            d="M310.37,145.23h59.86c42,0,76.06,33.13,76.06,74v125.35h-117.8H265.06h-51.6V197.69    c0-27.36-20.46-49.82-46.56-52.23v-0.23H310.37z M410.04,219.91c0-11.21-9.92-20.31-22.17-20.31c-11.07,0-16.61,5.08-22.14,15.23    c-5.54-10.15-11.07-15.23-22.15-15.23c-12.22,0-22.14,9.1-22.14,20.31c0,20.31,22.14,31.87,44.29,52.18    C387.87,251.78,410.04,240.22,410.04,219.91z"
            style={{
              fill: '#924B35',
            }}
          />
          <g>
            <g>
              <g>
                <path
                  d="M370.23,145.23h-59.86H166.9v0.23c8.842,0.816,17.034,3.94,24.005,8.77H305.37h59.86       c42,0,76.06,33.13,76.06,74v116.35h5V219.23C446.29,178.36,412.23,145.23,370.23,145.23z"
                  style={{
                    fill: '#743629',
                  }}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

export default Invitation
