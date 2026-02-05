import { Container } from "@/app/components/ui/Container";

export default function Register() {
  return (
    <Container className="lg:pt-12.5 pb-18.75 md:pb-25">
      <div>
        <h2 className="text-2xl md:text-[32px] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-6 md:mb-10 text-center">
          Start Your Registration
        </h2>

        <form className="flex flex-col gap-10">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                disabled={true}
                placeholder="Enter Your Name"
                className="w-full h-12 text-[#838799] px-4 py-3 bg-[#F6F7F9] placeholder:text-[#838799] outline-none rounded-sm disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tel">Phone No.</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                disabled={true}
                placeholder="Enter Your Phone No."
                className="w-full h-12 text-[#838799] px-4 py-3 bg-[#F6F7F9] placeholder:text-[#838799] outline-none rounded-sm disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                placeholder="Enter Your Email"
                className="w-full h-12 text-[#838799] px-4 py-3 bg-[#F6F7F9] placeholder:text-[#838799] outline-none rounded-sm disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state">Select State</label>

              {/* I WILL CHNAGE TO THE SELECT-OPTION LATER */}
              <div className="w-full h-12 bg-[#F6F7F9] rounded-sm cursor-not-allowed" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lga">Select LGA</label>

              {/* I WILL CHNAGE TO THE SELECT-OPTION LATER */}
              <div className="w-full h-12 bg-[#F6F7F9] rounded-sm cursor-not-allowed" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="nearest-city-town">Nearest City / Town</label>
              <textarea
                name="nearest-city-town"
                id="nearest-city-town"
                placeholder="Text Label"
                disabled={true}
                className="w-full h-[120px] text-[#838799] px-4 py-3 bg-[#F6F7F9] placeholder:text-[#838799] outline-none rounded-sm resize-none  disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div className="flex justify-center mt-[50px]">
            <button
              type="submit"
              disabled
              className="max-w-[328px] w-full h-12 bg-chanor-orange text-white rounded-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
