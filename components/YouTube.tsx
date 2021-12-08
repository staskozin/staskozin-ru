import s from '../styles/YouTube.module.scss';

export default function YouTube(props: { youtubeId: string }) {
  return (
    <div className={s['youtube-video']}>
      <iframe
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        frameBorder="0"
      />
    </div>
  )
}