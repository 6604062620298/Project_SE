import React from 'react'

function page() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-6">Chat</h1>
      <div className="space-y-4 flex items-baseline">

        <div className="card bg-base-100 text-primary-content shadow-lg w-1/3 min-h-80 relative">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-8 text-base-content">Contact</h2>
          </div>

          <div className="card bg-base-300 m-2">
            <div className="card-body p-4">
              <h2 className="card-title text-2xl text-base-content">user 101</h2>
            </div>
            
          </div>
        </div>

        <div className="card bg-base-100 text-primary-content shadow-lg ml-5 w-2/3 min-h-80">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-8 text-base-content">Selected User</h2>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default page