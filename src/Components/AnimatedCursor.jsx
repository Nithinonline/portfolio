import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
function Cursor() {
  return (
    <div>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='128,43,177'
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={3}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        
        />
    </div>
  )
}

export default Cursor
