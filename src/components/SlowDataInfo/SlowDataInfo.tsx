import s from './SlowDataInfo.module.scss'

const SlowDataInfo = () => {
  return (
    <div className={s.slowDataInfo}>
      First data load can be slow because backend is hosted for free and the
      server needs to 'wake up'.
    </div>
  )
}

export default SlowDataInfo
