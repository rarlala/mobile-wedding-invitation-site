import style from './Dimmed.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function Dimmed({ children }: { children: React.ReactNode }) {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
