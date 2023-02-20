import React from "react";

import "./Video.css"

const YoutubeEmbed = () => (
  <div className="video-responsive">
<iframe width="480" height="270" src="https://www.youtube.com/embed/EZbhue9QsZQ" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);



export default YoutubeEmbed;