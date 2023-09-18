export default function Dashboard() {
    return(
        <div className="flex h-screen">
      {/* sidebar */}
      <div style={{ width: '10%' }} className='fixed p-4 h-full bg-white bg-opacity-10'>
        <ul style={{}} className="flex flex-col">
          <li>home</li>
          <li>projects</li>
        </ul>
      </div>

      {/* content */}
      <div style={{ width: '90%' }} className='flex flex-col'>
        <div>header</div>
        <div className='flex flex-1'>
          <div style={{ width: '70%' }}>
            <div>Banner</div>
            <div>context & role</div>
            <div>technologies used</div>
          </div>
          <div style={{ width: '30%' }}>project description 2</div>
        </div>
      </div>
    </div>
    );

}