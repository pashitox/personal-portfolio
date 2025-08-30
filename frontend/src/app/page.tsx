import TestComponent from '@/components/TestComponent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          🎉 ¡App Router Funcionando!
        </h1>
        <TestComponent message="¡TypeScript funciona!" count={42} />
      </div>
    </div>
  )
}
