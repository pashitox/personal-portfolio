interface TestProps {
  message: string;
  count?: number;
}

export default function TestComponent({ message, count = 0 }: TestProps) {
  return (
    <div className="bg-white/10 p-4 rounded-lg mt-4">
      <p>{message}</p>
      <p>Count: {count}</p>
    </div>
  )
}
