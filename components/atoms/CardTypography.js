export default function CardTypography({ username, feedback }) {
  return (
    <div className="bg-white p-5 w-[247px] h-[140px] box-border">
      <h4 className="font-black text-[32px] leading-[26px]">{username}</h4>
      <p className="text-[12px] leading-[14px] pt-[20px]">
        {feedback}
      </p>
    </div>
  );
}
