

export default function Volunteer() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome Volunteers!</h1>

        <div>
          <p>How would you like to volunteer?</p>

          <h2>Everything Helps!</h2>

          <p>No matter what your volunteering experience, skillset, or availability, WebsiteName can help you help others!</p>
          <p>Choose one of the options on the right to get started.</p>
        </div>

        <div>
          <div>
            {/* icon */}
            <div>
              <h3>Volunteer Your Time</h3>
              <p>Whether you want to</p>
            </div>
          </div>
          <div>
            {/* icon */}
            <div>
              <h3>Provide Financial Aid</h3>
              <p>Donate Money to the group or organization of choice.</p>
            </div>
          </div>
          <div>
            {/* icon */}
            <div>
              <h3>Provide Financial Aid</h3>
              <p>Donate Money to the group or organization of choice.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );

}