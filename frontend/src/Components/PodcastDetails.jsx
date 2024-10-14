


export const PodcastDetails = ({ title, mp3, content }) => {
  return (
    <>
      <div className="podcast-details">
        <h3>{title} </h3>
        <audio src={mp3} controls></audio>
        <p>{content}</p>

      </div>

    </>
  )
}
