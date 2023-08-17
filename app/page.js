import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-primary">Attendance</h1>
          <p className="mt-3 text-base text-primary">
            Attendance is a simple app to track your attendance.
          </p>
          <div className="flex flex-col items-center justify-center mt-8">
            <Button onClick={handleLogin} variant="outline" size="lg">
              Login
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
