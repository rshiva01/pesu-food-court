export default function Vendor({
  name,
  imagesrc,
}: {
  name: string;
  imagesrc: string;
}) {
  return (
    <div className='flex flex-row rounded-[1vh] bg-burgundy p-[1vh] sm:mb-[5vh] md:flex-col md:p-[1vw]'>
      <img src={imagesrc} className='rounded-full sm:h-[18.5vh] md:w-[25vw]' />
      <p className='my-auto text-center text-[2.5vh] text-white sm:mx-auto md:pt-[2vh] md:text-[1.5vw]'>
        {name}
      </p>
    </div>
  );
}
