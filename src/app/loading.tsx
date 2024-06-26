import Icons from "../../public/Icons";

export default function Loading() {
  return (
    <div className={'flex items-center flex-col mt-6'}>
      <Icons name={'loading'} />
      <p className={'mt-6'}>Loading...</p>
    </div>
  );
}