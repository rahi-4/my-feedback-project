import React from 'react';

function Footer() {
  const Data = [
    {
      title: "About",
      menus: [
        { items: ["About MyFeedback", "Investor Relations"] }
      ]
    },
    {
      title: "MyFeedback",
      menus: [
        {
          items: [
            "MyFeedback for business",
            "Collections",
            "Talk",
            "Events",
            "MyFeedback blog",
            "Support",
            "Developers"
          ]
        }
      ]
    }
  ];

  return (
    <footer className="bg-white">
        <hr className='text-[#DCDCDC]' />
      <div className="container mx-auto py-8 px-4 font-Roboto max-w-[1440px]">
     
        <div className="flex flex-col lg:flex-row mx-auto justify-center gap-10 text-xl">
         
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-[200px]">
            {Data.map((menu, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4">{menu.title}</h4>
                <ul className="space-y-1">
                  {menu.menus.map((submenu, idx) =>
                    submenu.items.map((item, i) => (
                      <li key={i} className="mb-1 text-[#5E5E5E]">{item}</li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>

         
        
<div className="flex flex-col gap-6">
  <div className="flex flex-col">
    <label htmlFor="language" className="mb-1 text-lg font-medium">Languages</label>
    <select
      id="language"
      className="rounded px-3 py-2 text-base "
    >
      <option>English</option>
      <option>Bengali</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label htmlFor="country" className="mb-1 text-lg font-medium">Countries</label>
    <select
      id="country"
      className="rounded px-3 py-2 text-base"
    >
      <option>Singapore</option>
      <option>Bangladesh</option>
    </select>
  </div>
</div>

        </div>
      </div>
      <p className='text-center mb-4 text-[#1E1E1E] font-Roboto font-bold text-[14px]'>Copyright:Septembre 2023 myfeedback, designed by scott</p>
    </footer>
  );
}

export default Footer;
