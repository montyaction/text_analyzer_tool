import './index.scss'

type BottomResultBarProps = {
  averageReadingTime: number | null;
  longestWord: string | null;
}

const BottomResultBar = ({ averageReadingTime, longestWord }: BottomResultBarProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: `~${averageReadingTime} minute`,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBar
