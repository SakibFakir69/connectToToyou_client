import React from "react";

function Faq() {
  return (
    <div className="px-2 mb-6">
      <h2>Faq</h2>

      <div className="collapse collapse-arrow bg-white border border-base-300 shadow-2xl
      
      hover:shadow[0_0__15px_red">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
        What type of news can I share?
        </div>
        <div className="collapse-content text-sm">
        You can share news on any topic, including local news, global events, politics, technology, entertainment, sports, and more. However, please make sure the content follows our guidelines for respectful and informative sharing.
        </div>
      </div>
     
      <div className="collapse collapse-arrow bg-white border border-base-300 shadow-2xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
        Is there a character limit for submitting news?
        </div>
        <div className="collapse-content text-sm">
        Yes, each news post must be concise, with a maximum character limit of 500 characters. This ensures that the news remains brief and easy to read.
        </div>


      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300 shadow-2xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
        Is there a character limit for submitting news?
        </div>
        <div className="collapse-content text-sm">
        Yes, each news post must be concise, with a maximum character limit of 50 characters. This ensures that the news remains brief and easy to read.
        </div>


      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300 shadow-2xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
        Is my personal information safe on this platform?
        </div>
        <div className="collapse-content text-sm">
        Yes, we take your privacy seriously. We don’t share your personal information with third parties without your consent. For more details, please refer to our Privacy Policy.
        </div>


      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300 shadow-2xl">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
        Is there a character limit for submitting news?
        </div>
        <div className="collapse-content text-sm">
        Yes, each news post must be concise, with a maximum character limit of 500 characters. This ensures that the news remains brief and easy to read.
        </div>


      </div>


    </div>
  );
}

export default Faq;
