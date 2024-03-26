import React from 'react';
import HornedBeast from './HornedBeast'; // Adjust the path as necessary


function Gallery() {
  return (
    <div>
      <HornedBeast 
        title="Majestic Rhino"
        imageUrl="https://pictures.tripmasters.com/images/apkg/2659/kenya_-_nairobi_-_rhino-1136697-500.jpg"
        description="A majestic rhino with a powerful horn."
      />
      <HornedBeast 
        title="Unicorn in the Wild"
        imageUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04d33b29-98eb-4286-852b-f271ee2b40ff/dfvl5pn-f99026c9-e618-485d-80d6-5b6a4b8a24de.jpg/v1/fit/w_375,h_482,q_70,strp/unicorn_by_samitdigitalart_dfvl5pn-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0NiIsInBhdGgiOiJcL2ZcLzA0ZDMzYjI5LTk4ZWItNDI4Ni04NTJiLWYyNzFlZTJiNDBmZlwvZGZ2bDVwbi1mOTkwMjZjOS1lNjE4LTQ4NWQtODBkNi01YjZhNGI4YTI0ZGUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0k7z15AKI_4oVz-zSkNcQk07SXiKz5zj3cksdP7iLrU"
        description="A mythical unicorn roaming free in the forest."
      />
    </div>
  );
}

export default Gallery;
