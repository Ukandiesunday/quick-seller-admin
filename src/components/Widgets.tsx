interface WidgetProps {
  total: number;
  detail: string;
}
const Widgets = ({ total, detail }: WidgetProps) => {
  return (
    <div className=" flex flex-col justify-center gap-[5px] items-center bg-white h-[100px] py-[30px] px-[70px] text-center rounded-[10px]">
      <p className="font-[600] text-[32px]">{total}</p>
      <p className="text-nowrap font-[400] text-[14px] capitalize">{detail}</p>
    </div>
  );
};

export default Widgets;
