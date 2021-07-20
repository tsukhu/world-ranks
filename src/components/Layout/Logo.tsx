import { forwardRef } from "react";

const Logo = (props) => {
  return (
    <div>
      <svg
        width={175}
        height={24}
        viewBox="0 0 175 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M32.32 20c-.272 0-.496-.072-.672-.216a.993.993 0 01-.288-.576l-2.568-15.36a.46.46 0 01.12-.48.505.505 0 01.36-.168h3.144c.464 0 .72.184.768.552l1.464 9.072 1.656-5.256c.128-.432.392-.648.792-.648h1.8c.4 0 .664.216.792.648l1.656 5.232 1.488-9.048c.032-.192.104-.328.216-.408.112-.096.288-.144.528-.144h3.144c.144 0 .264.056.36.168a.46.46 0 01.144.336v.144l-2.568 15.36a.94.94 0 01-.312.576.99.99 0 01-.648.216h-2.424c-.256 0-.456-.064-.6-.192a.937.937 0 01-.288-.432l-2.376-6.648-2.376 6.648c-.064.16-.168.304-.312.432s-.344.192-.6.192h-2.4zm22.618.24c-2.016 0-3.568-.464-4.656-1.392-1.072-.944-1.656-2.28-1.752-4.008a16.344 16.344 0 01-.024-1.08c0-.512.008-.872.024-1.08.096-1.696.696-3.016 1.8-3.96 1.12-.96 2.656-1.44 4.608-1.44 1.952 0 3.48.48 4.584 1.44 1.12.944 1.728 2.264 1.824 3.96.032.416.048.776.048 1.08 0 .304-.016.664-.048 1.08-.096 1.728-.688 3.064-1.776 4.008-1.072.928-2.616 1.392-4.632 1.392zm0-3.024c.656 0 1.144-.2 1.464-.6.32-.416.504-1.048.552-1.896.016-.16.024-.48.024-.96s-.008-.8-.024-.96c-.048-.832-.232-1.456-.552-1.872-.32-.416-.808-.624-1.464-.624-.656 0-1.144.208-1.464.624-.32.416-.504 1.04-.552 1.872l-.024.96.024.96c.048.848.232 1.48.552 1.896.32.4.808.6 1.464.6zM64.281 20a.639.639 0 01-.433-.168.639.639 0 01-.167-.432V8.144c0-.176.056-.32.168-.432a.548.548 0 01.432-.192h2.927c.177 0 .32.064.433.192a.548.548 0 01.191.432v.912a4.482 4.482 0 011.56-1.128 4.881 4.881 0 012.017-.408h1.08c.175 0 .32.056.431.168a.585.585 0 01.168.432v2.616c0 .16-.055.304-.167.432a.585.585 0 01-.433.168h-2.424c-.64 0-1.135.176-1.487.528-.337.352-.504.848-.504 1.488V19.4c0 .176-.064.32-.192.432a.585.585 0 01-.433.168h-3.167zm11.086 0a.67.67 0 01-.456-.168.585.585 0 01-.168-.432V3.56c0-.176.056-.32.168-.432a.67.67 0 01.456-.168h3c.176 0 .32.056.432.168a.585.585 0 01.168.432V19.4c0 .16-.056.304-.168.432a.585.585 0 01-.432.168h-3zm11.017.24c-1.552 0-2.776-.488-3.672-1.464-.88-.976-1.352-2.368-1.416-4.176l-.024-.84.024-.864c.064-1.744.544-3.112 1.44-4.104.896-1.008 2.112-1.512 3.648-1.512 1.44 0 2.6.464 3.48 1.392V3.56c0-.176.056-.32.168-.432a.639.639 0 01.432-.168h3.096c.176 0 .32.056.432.168a.548.548 0 01.192.432V19.4c0 .176-.064.32-.192.432a.585.585 0 01-.432.168h-2.856a.639.639 0 01-.432-.168.639.639 0 01-.168-.432v-.744c-.864 1.056-2.104 1.584-3.72 1.584zm1.392-3.336c.688 0 1.2-.216 1.536-.648.336-.448.52-1.008.552-1.68a15.6 15.6 0 00.048-.912c0-.176-.016-.472-.048-.888-.032-.624-.224-1.136-.576-1.536-.336-.416-.84-.624-1.512-.624-.72 0-1.24.216-1.56.648-.304.416-.48 1-.528 1.752l-.024.744.024.744c.048.752.224 1.344.528 1.776.32.416.84.624 1.56.624z"
          fill="#B9C9D1"
        />
        <path
          d="M102.818 20a.639.639 0 01-.432-.168.639.639 0 01-.168-.432V3.824c0-.176.056-.32.168-.432a.548.548 0 01.432-.192h6.6c2.112 0 3.76.48 4.944 1.44 1.2.96 1.8 2.312 1.8 4.056 0 1.12-.264 2.072-.792 2.856-.512.784-1.224 1.392-2.136 1.824l3.24 5.856a.597.597 0 01.072.264.544.544 0 01-.144.36.488.488 0 01-.36.144h-3.384c-.464 0-.792-.216-.984-.648l-2.64-5.208h-2.304V19.4c0 .176-.064.32-.192.432a.585.585 0 01-.432.168h-3.288zm6.576-9.384c.688 0 1.208-.168 1.56-.504.368-.352.552-.832.552-1.44s-.184-1.096-.552-1.464c-.352-.368-.872-.552-1.56-.552h-2.664v3.96h2.664zm13.015 9.624c-.848 0-1.624-.16-2.328-.48-.688-.336-1.232-.792-1.632-1.368a3.347 3.347 0 01-.576-1.896c0-1.088.448-1.968 1.344-2.64.912-.688 2.16-1.16 3.744-1.416l2.976-.456v-.288c0-.592-.12-1.024-.36-1.296s-.648-.408-1.224-.408c-.32 0-.592.056-.816.168-.208.112-.448.28-.72.504a2.91 2.91 0 01-.552.384c-.064.112-.144.168-.24.168h-2.784a.606.606 0 01-.408-.144.485.485 0 01-.12-.384c.016-.432.232-.912.648-1.44.416-.544 1.048-1.008 1.896-1.392.848-.384 1.896-.576 3.144-.576 1.984 0 3.456.44 4.416 1.32.96.864 1.44 2.04 1.44 3.528V19.4c0 .16-.056.304-.168.432a.585.585 0 01-.432.168h-2.952a.639.639 0 01-.432-.168.639.639 0 01-.168-.432v-.84c-.352.496-.84.904-1.464 1.224-.624.304-1.368.456-2.232.456zm1.2-2.832c.704 0 1.272-.232 1.704-.696.448-.464.672-1.136.672-2.016v-.288l-1.992.336c-1.344.256-2.016.736-2.016 1.44 0 .368.152.664.456.888.32.224.712.336 1.176.336zM133.468 20a.639.639 0 01-.432-.168.639.639 0 01-.168-.432V8.12c0-.176.056-.32.168-.432a.639.639 0 01.432-.168h2.952c.176 0 .32.056.432.168a.585.585 0 01.168.432v.912a4.727 4.727 0 011.656-1.272c.688-.32 1.472-.48 2.352-.48.912 0 1.72.208 2.424.624.72.416 1.28 1.032 1.68 1.848.416.816.624 1.8.624 2.952V19.4c0 .16-.056.304-.168.432a.585.585 0 01-.432.168h-3.192a.67.67 0 01-.456-.168.585.585 0 01-.168-.432v-6.552c0-.72-.176-1.272-.528-1.656-.336-.384-.832-.576-1.488-.576-.64 0-1.144.2-1.512.6-.368.384-.552.928-.552 1.632V19.4c0 .16-.056.304-.168.432a.585.585 0 01-.432.168h-3.192zm15.54 0a.67.67 0 01-.456-.168.585.585 0 01-.168-.432V3.56c0-.176.056-.32.168-.432a.67.67 0 01.456-.168h2.928c.176 0 .32.056.432.168a.585.585 0 01.168.432v8.016l3.192-3.648.168-.168a.899.899 0 01.288-.168.801.801 0 01.36-.072h3.384c.144 0 .264.056.36.168a.48.48 0 01.168.384.529.529 0 01-.168.384l-4.224 4.656 4.824 5.976c.112.144.168.264.168.36 0 .16-.056.296-.168.408a.519.519 0 01-.384.144h-3.48c-.208 0-.368-.032-.48-.096a2.562 2.562 0 01-.36-.312l-3.648-4.512v4.32c0 .16-.056.304-.168.432a.585.585 0 01-.432.168h-2.928zm18.53.24c-1.312 0-2.408-.184-3.288-.552-.88-.368-1.536-.808-1.968-1.32-.416-.512-.624-.976-.624-1.392a.48.48 0 01.168-.384.611.611 0 01.408-.168h2.904c.096 0 .176.032.24.096.272.176.424.28.456.312.304.224.584.4.84.528.272.112.592.168.96.168.432 0 .784-.08 1.056-.24.288-.176.432-.416.432-.72a.844.844 0 00-.24-.624c-.144-.16-.432-.312-.864-.456-.416-.16-1.056-.32-1.92-.48-2.768-.56-4.152-1.84-4.152-3.84 0-.656.208-1.28.624-1.872.432-.608 1.056-1.096 1.872-1.464.832-.368 1.824-.552 2.976-.552 1.168 0 2.176.184 3.024.552.864.352 1.52.784 1.968 1.296.448.496.672.952.672 1.368a.529.529 0 01-.168.384.455.455 0 01-.36.168h-2.64a.525.525 0 01-.336-.096 3.783 3.783 0 01-.576-.36 4.921 4.921 0 00-.768-.432c-.208-.112-.48-.168-.816-.168-.4 0-.712.088-.936.264a.819.819 0 00-.336.672c0 .24.064.44.192.6.144.144.424.288.84.432.432.144 1.08.296 1.944.456 1.568.272 2.704.76 3.408 1.464.72.688 1.079 1.496 1.079 2.424 0 1.2-.535 2.16-1.607 2.88-1.056.704-2.544 1.056-4.464 1.056z"
          fill="#21B6B7"
        />
        <rect y={15.734} width={22} height={4.4} rx={2} fill="#21B6B7" />
        <rect y={9.867} width={14.667} height={4.4} rx={2} fill="#21B6B7" />
        <rect y={4} width={7.333} height={4.4} rx={2} fill="#21B6B7" />
      </svg>
    </div>
  );
};

export default Logo;
