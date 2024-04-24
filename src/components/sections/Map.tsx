import { useEffect, useRef } from 'react'

import Section from '@shared/Section'

import { Location } from '@/models/wedding'

import style from './Map.module.scss'
import classNames from 'classnames/bind'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(style)

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const marker = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        marker.setMap(map)
      })
    }
  }, [])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는 길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome
          icon={<IconBus className="ico-bus" />}
          label="버스"
          list={location.waytocome.bus}
        />
        <WayToCome
          icon={<IconSubway className="ico-metro" />}
          label="지하철"
          list={location.waytocome.metro}
        />
      </div>
    </Section>
  )
}

function WayToCome({
  label,
  list,
  icon,
}: {
  label: React.ReactNode
  list: string[]
  icon: React.ReactNode
}) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>
        <span className={cx('icon')}>{icon}</span>
        {label}
      </div>
      <ul className={cx('txt-list')}>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

function IconBus({ className }: { className: string }) {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 110 110"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Artboard" />
      <g id="Multicolor">
        <circle
          cx={55}
          cy={55}
          r={55}
          style={{
            fill: '#FABC3D',
          }}
        />
        <g>
          <g>
            <path
              d="M79,31c0-4.418-3.582-8-8-8H39c-4.418,0-8,3.582-8,8v50c0,1.105,0.895,2,2,2h44     c1.105,0,2-0.895,2-2V31z"
              style={{
                fill: '#DF2C2C',
              }}
            />
          </g>
          <g>
            <path
              d="M76.198,24.926C74.799,23.728,72.986,23,71,23H39c-4.418,0-8,3.582-8,8v39.124L76.198,24.926z"
              style={{
                fill: '#FA5655',
              }}
            />
          </g>
          <g>
            <path
              d="M31,83v2c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-2H31z"
              style={{
                fill: '#3E3E3F',
              }}
            />
          </g>
          <g>
            <path
              d="M67,85c0,1.104,0.896,2,2,2h8c1.104,0,2-0.896,2-2v-2H67V85z"
              style={{
                fill: '#3E3E3F',
              }}
            />
          </g>
          <g>
            <path
              d="M81,74c0-2.209-1.791-4-4-4h-9l-2.447-2.894C65.214,66.428,64.521,66,63.764,66H46.236     c-0.758,0-1.45,0.428-1.789,1.106L42,70h-9c-2.209,0-4,1.791-4,4v7c0,1.105,0.895,2,2,2h48c1.105,0,2-0.895,2-2V74z"
              style={{
                fill: '#FA5655',
              }}
            />
          </g>
          <g>
            <path
              d="M54,69h-7c-1.104,0-2,0.896-2,2v7c0,1.104,0.896,2,2,2h7V69z"
              style={{
                fill: '#BF0302',
              }}
            />
          </g>
          <g>
            <path
              d="M56,69h7c1.104,0,2,0.896,2,2v7c0,1.104-0.896,2-2,2h-7V69z"
              style={{
                fill: '#BF0302',
              }}
            />
          </g>
          <g>
            <circle
              cx={37}
              cy={77}
              r={3}
              style={{
                fill: '#FBE158',
              }}
            />
          </g>
          <g>
            <circle
              cx={72}
              cy={77}
              r={3}
              style={{
                fill: '#FBE158',
              }}
            />
          </g>
          <g>
            <rect
              height={2}
              style={{
                fill: '#E2E4E5',
              }}
              width={48}
              x={31}
              y={47}
            />
          </g>
          <g>
            <polygon
              points="54.124,47 31,47 31,49 52.124,49    "
              style={{
                fill: '#FFFFFF',
              }}
            />
          </g>
          <g>
            <path
              d="M75,49H57v12c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V49z"
              style={{
                fill: '#40C9E7',
              }}
            />
          </g>
          <g>
            <path
              d="M35,37c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2v-8c0-1.105-0.895-2-2-2H37     c-1.105,0-2,0.895-2,2V37z"
              style={{
                fill: '#6FDAF1',
              }}
            />
          </g>
          <g>
            <path
              d="M57,37c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2v-8c0-1.105-0.895-2-2-2H59     c-1.105,0-2,0.895-2,2V37z"
              style={{
                fill: '#40C9E7',
              }}
            />
          </g>
          <g>
            <path
              d="M73,27H59c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2h3.124L73.9,27.223     C73.628,27.085,73.326,27,73,27z"
              style={{
                fill: '#6FDAF1',
              }}
            />
          </g>
          <g>
            <path
              d="M72,74.044c-1.657,0-3,1.343-3,3c0,0.751,0.286,1.43,0.742,1.956l4.214-4.214     C73.43,74.33,72.751,74.044,72,74.044z"
              style={{
                fill: '#FBEC9A',
              }}
            />
          </g>
          <g>
            <path
              d="M37,74c-1.657,0-3,1.343-3,3c0,0.751,0.286,1.43,0.742,1.956l4.214-4.214     C38.43,74.286,37.751,74,37,74z"
              style={{
                fill: '#FBEC9A',
              }}
            />
          </g>
          <rect
            height={8}
            style={{
              fill: '#40C9E7',
            }}
            width={18}
            x={35}
            y={49}
          />
          <path
            d="M35,61c0,1.104,0.896,2,2,2h14c1.104,0,2-0.896,2-2v-2H35V61z"
            style={{
              fill: '#40C9E7',
            }}
          />
          <polygon
            points="44.124,57 52.124,49 35,49 35,57   "
            style={{
              fill: '#6FDAF1',
            }}
          />
          <path
            d="M35,59v2c0,1.104,0.896,2,2,2h1.124l4-4H35z"
            style={{
              fill: '#6FDAF1',
            }}
          />
        </g>
      </g>
    </svg>
  )
}

function IconSubway({ className }: { className: string }) {
  return (
    <svg
      className={cx(className)}
      id="Layer_1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={32} cy={32} fill="#C75C5C" r={32} />
      <g opacity={0.2}>
        <path
          d="M20,34h24c1.103,0,2-0.897,2-2V20c0-1.103-0.897-2-2-2H20c-1.103,0-2,0.897-2,2v12   C18,33.103,18.897,34,20,34z"
          fill="#231F20"
        />
        <path
          d="M44,14H20c-3.309,0-6,2.691-6,6v12v12c0,3.309,2.691,6,6,6h24c3.309,0,6-2.691,6-6V32V20   C50,16.691,47.309,14,44,14z M18,20c0-1.103,0.897-2,2-2h24c1.103,0,2,0.897,2,2v12c0,1.103-0.897,2-2,2H20c-1.103,0-2-0.897-2-2   V20z"
          fill="#231F20"
        />
        <circle cx={44} cy={44} fill="#231F20" r={2} />
        <path
          d="M42,52H22c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h20c1.105,0,2-0.895,2-2C44,52.895,43.105,52,42,52z"
          fill="#231F20"
        />
      </g>
      <path
        d="M48,42c0,2.209-1.791,4-4,4H20  c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h24c2.209,0,4,1.791,4,4V42z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M48,30c0,2.209-1.791,4-4,4H20  c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h24c2.209,0,4,1.791,4,4V30z"
        fill="#4F5D73"
        stroke="#FFFFFF"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <g>
        <path
          d="M20,46h24c2.209,0,4-1.791,4-4v-4H16v4   C16,44.209,17.791,46,20,46z"
          fill="#E0E0D1"
          stroke="#E0E0D1"
          strokeMiterlimit={10}
          strokeWidth={4}
        />
      </g>
      <path
        d="M24,42c0,2.209-1.791,4-4,4l0,0  c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4l0,0C22.209,38,24,39.791,24,42L24,42z"
        fill="#E0995E"
        stroke="#E0E0D1"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M48,42c0,2.209-1.791,4-4,4l0,0  c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4l0,0C46.209,38,48,39.791,48,42L48,42z"
        fill="#E0995E"
        stroke="#E0E0D1"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M44,52c0,1.105-0.895,2-2,2H22c-1.105,0-2-0.895-2-2l0,0c0-1.105,0.895-2,2-2h20C43.105,50,44,50.895,44,52  L44,52z"
        fill="#F5CF87"
      />
    </svg>
  )
}

export default Map
