import {useState} from 'react'
import config from '../../config'

export default function Banner({banner}) {
      if(banner) {
            return (
             <>
               <div className="banner">
                 <p>
                  {config.banner.message}
                  <a id="close">&time;</a>
                 </p>
               </div>
               
               <style jsx>{`
                  .banner {
                    width: 100vw;
                    height: 30px;
                    background: var(--primary);
                    color: var(--white);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: .4s ease;
                  }
                  #close {
                    position: absolute;
                    top: 5px;
                    right: 15px;
                  }
               `}</style>
             </>
            );
      }
     return null;
}
