import CardHelpTips from '../atoms/CardHelpTips';

export default function HelpTipsSection({ data }) {
  return (
    <section>
      <div className="pt-[67px] px-[32px] bg-black h-auto xl:px-0">
        <h3 className="font-black text-[32px] text-white xl:text-center xl:leading-[38px]">
          Help & Tips
        </h3>
        <div className="flex flex-col mt-[20px] items-center lg:flex-row lg:justify-between lg:box-content lg:max-w-[954px] xl:mx-[206px] 2xl:mx-auto">
          {data.map((item) => (
            <CardHelpTips key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
