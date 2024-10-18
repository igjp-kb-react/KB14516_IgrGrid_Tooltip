import {
  IgrColumn,
  IgrGrid,
  IgrColumnPipeArgs,
  IgrCellTemplateContext,
} from "@infragistics/igniteui-react-grids";
import { sampleData } from "./appData";
import "./app.css";

const formatOptions: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
formatOptions.digitsInfo = "1.0-0";

export const App = () => {
  const columnBodyTemplate = (ctx: { dataContext: IgrCellTemplateContext }) => {
    const name = ctx.dataContext.cell.row.data.name;
    const country = ctx.dataContext.cell.row.data.country;
    const age = ctx.dataContext.cell.row.data.age;
    const tooltipContent = `${name} は ${country} 出身で年齢は ${age} 歳です`;

    return (
      <div>
        <span title={tooltipContent}>{name}</span>
      </div>
    );
  };
  return (
    <div style={{ maxWidth: "600px", maxHeight: "900px", margin: "24px auto" }}>
      <IgrGrid
        data={sampleData}
        primaryKey="id"
        autoGenerate="false"
        width="100%"
        height="100%"
      >
        <IgrColumn field="id" width="auto" />
        <IgrColumn
          field="name"
          header="氏名"
          bodyTemplate={columnBodyTemplate}
        />
        <IgrColumn field="country" header="出身" />
        <IgrColumn field="age" header="年齢" />
      </IgrGrid>
    </div>
  );
};
