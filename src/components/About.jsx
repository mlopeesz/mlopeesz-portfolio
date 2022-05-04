import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="About" className="text-white flex justify-center mx-2 items-center">
        <div className="flex flex-col max-w-[90%]">
          <h3 className="bg-dark-bg text-yellow-select text-center my-2">Sobre mim</h3>
          <p className="break-all">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim libero non ante mollis, vitae luctus odio hendrerit. Nam interdum, ipsum at maximus molestie, purus turpis consectetur ipsum, in ultrices quam lorem eget sapien. Vestibulum ac rutrum risus. Maecenas pulvinar sapien leo, at viverra ex egestas eu. Interdum et malesuada.
          </p> 
        </div>
      </div>
    );
  }
}

export default About;