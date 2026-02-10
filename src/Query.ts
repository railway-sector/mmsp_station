/* eslint-disable @typescript-eslint/no-unused-expressions */
import { dateTable, stationStructureLayer } from "./layers";
import StatisticDefinition from "@arcgis/core/rest/support/StatisticDefinition";

// Updat date
export async function dateUpdate() {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const query = dateTable.createQuery();
  query.where = "category = 'Station Structures'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? "" : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

// Generate chart data
const statioinStructureType = [
  "D-Wall",
  "Column",
  "Slab",
  "Kings Post",
  "Secant Pile",
  "Column Head",
];
export const statioinStructureTypeChart = [
  {
    category: statioinStructureType[0],
    value: 1,
  },
  {
    category: statioinStructureType[1],
    value: 2,
  },
  {
    category: statioinStructureType[2],
    value: 3,
  },
  {
    category: statioinStructureType[3],
    value: 4,
  },
  {
    category: statioinStructureType[4],
    value: 5,
  },
  {
    category: statioinStructureType[5],
    value: 6,
  },
];

export async function generateChartData(stationname: any) {
  const total_dwall_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 1 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_dwall_incomp",
    statisticType: "sum",
  });

  const total_dwall_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 1 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_dwall_comp",
    statisticType: "sum",
  });

  const total_dwall_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 1 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_dwall_delay",
    statisticType: "sum",
  });

  const total_column_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 2 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_column_incomp",
    statisticType: "sum",
  });

  const total_column_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 2 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_column_comp",
    statisticType: "sum",
  });

  const total_column_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 2 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_column_delay",
    statisticType: "sum",
  });

  const total_slab_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 3 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_slab_incomp",
    statisticType: "sum",
  });

  const total_slab_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 3 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_slab_comp",
    statisticType: "sum",
  });

  const total_slab_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 3 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_slab_delay",
    statisticType: "sum",
  });

  const total_kingpost_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 4 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_kingpost_incomp",
    statisticType: "sum",
  });

  const total_kingpost_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 4 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_kingpost_comp",
    statisticType: "sum",
  });

  const total_kingpost_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 4 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_kingpost_delay",
    statisticType: "sum",
  });

  const total_secant_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 5 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_secant_incomp",
    statisticType: "sum",
  });

  const total_secant_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 5 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_secant_comp",
    statisticType: "sum",
  });

  const total_secant_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 5 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_secant_delay",
    statisticType: "sum",
  });

  const total_columnhead_incomp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 6 and Status = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_columnhead_incomp",
    statisticType: "sum",
  });

  const total_columnhead_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 6 and Status = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_columnhead_comp",
    statisticType: "sum",
  });

  const total_columnhead_delay = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Type = 6 and Status = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_columnhead_delay",
    statisticType: "sum",
  });

  // Query
  const query = stationStructureLayer.createQuery();
  query.outStatistics = [
    total_dwall_incomp,
    total_dwall_comp,
    total_dwall_delay,
    total_column_incomp,
    total_column_delay,
    total_column_comp,
    total_slab_incomp,
    total_slab_delay,
    total_slab_comp,
    total_kingpost_incomp,
    total_kingpost_delay,
    total_kingpost_comp,
    total_secant_incomp,
    total_secant_delay,
    total_secant_comp,
    total_columnhead_incomp,
    total_columnhead_delay,
    total_columnhead_comp,
  ];

  // Query
  const defaultExpression = "1=1";
  const expression = "Station1 = '" + stationname + "'";
  if (!stationname) {
    stationStructureLayer.definitionExpression = defaultExpression;
    query.where = defaultExpression;
  } else {
    query.where = expression;
    stationStructureLayer.definitionExpression = expression;
  }

  return stationStructureLayer.queryFeatures(query).then((response: any) => {
    const stats = response.features[0].attributes;
    const dwall_incomp = stats.total_dwall_incomp;
    const dwall_delay = stats.total_dwall_delay;
    const dwall_comp = stats.total_dwall_comp;
    const column_incomp = stats.total_column_incomp;
    const column_delay = stats.total_column_delay;
    const column_comp = stats.total_column_comp;
    const slab_incomp = stats.total_slab_incomp;
    const slab_delay = stats.total_slab_delay;
    const slab_comp = stats.total_slab_comp;
    const kingpost_incomp = stats.total_kingpost_incomp;
    const kingpost_delay = stats.total_kingpost_delay;
    const kingpost_comp = stats.total_kingpost_comp;
    const secant_incomp = stats.total_secant_incomp;
    const secant_delay = stats.total_secant_delay;
    const secant_comp = stats.total_secant_comp;
    const columnhead_incomp = stats.total_secant_incomp;
    const columnhead_delay = stats.total_secant_delay;
    const columnhead_comp = stats.total_secant_comp;

    const data = [
      {
        category: statioinStructureType[0],
        comp: dwall_comp,
        incomp: dwall_incomp,
        delay: dwall_delay,
      },
      {
        category: statioinStructureType[1],
        comp: column_comp,
        incomp: column_incomp,
        delay: column_delay,
      },
      {
        category: statioinStructureType[2],
        comp: slab_comp,
        incomp: slab_incomp,
        delay: slab_delay,
      },
      {
        category: statioinStructureType[3],
        comp: kingpost_comp,
        incomp: kingpost_incomp,
        delay: kingpost_delay,
      },
      {
        category: statioinStructureType[4],
        comp: secant_comp,
        incomp: secant_incomp,
        delay: secant_delay,
      },
      {
        category: statioinStructureType[5],
        comp: columnhead_comp,
        incomp: columnhead_incomp,
        delay: columnhead_delay,
      },
    ];
    return data;
  });
}

export async function generateTotalProgress(stationname: any) {
  const total_structures_number = new StatisticDefinition({
    onStatisticField: "Status",
    outStatisticFieldName: "total_structures_number",
    statisticType: "count",
  });

  const total_structures_comp = new StatisticDefinition({
    onStatisticField: "CASE WHEN Status = 4 THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_structures_comp",
    statisticType: "sum",
  });

  const query = stationStructureLayer.createQuery();
  const defaultExpression = "1=1";
  const expression = "Station1 = '" + stationname + "'";

  if (!stationname) {
    query.where = defaultExpression;
  } else {
    query.where = expression;
  }
  query.outStatistics = [total_structures_number, total_structures_comp];

  return stationStructureLayer.queryFeatures(query).then((response: any) => {
    const stats = response.features[0].attributes;
    const comp = stats.total_structures_comp;
    const total = stats.total_structures_number;
    const progress = ((comp / total) * 100).toFixed(1);

    return [total, comp, progress];
  });
}

export async function timeSeriesChartData(stationname: any) {
  const total_complete_dwall = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 1) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_dwall",
    statisticType: "sum",
  });

  const total_complete_column = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 2) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_column",
    statisticType: "sum",
  });

  const total_complete_slab = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 3) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_slab",
    statisticType: "sum",
  });

  const total_complete_kingpost = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 4) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_kingpost",
    statisticType: "sum",
  });

  const total_complete_secant = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 5) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_secant",
    statisticType: "sum",
  });

  const total_complete_columnhead = new StatisticDefinition({
    onStatisticField: "CASE WHEN (Status = 4 and Type = 6) THEN 1 ELSE 0 END",
    outStatisticFieldName: "total_complete_columnhead",
    statisticType: "sum",
  });

  const query = stationStructureLayer.createQuery();
  // eslint-disable-next-line no-useless-concat

  if (!stationname) {
    // eslint-disable-next-line no-useless-concat
    query.where = "end_date IS NOT NULL";
  } else {
    // eslint-disable-next-line no-useless-concat
    query.where =
      "end_date IS NOT NULL" + " AND " + "Station1 = '" + stationname + "'";
  }

  query.outStatistics = [
    total_complete_dwall,
    total_complete_column,
    total_complete_slab,
    total_complete_kingpost,
    total_complete_secant,
    total_complete_columnhead,
  ];
  query.outFields = ["end_date", "Station1"];
  query.orderByFields = ["end_date"];
  query.groupByFieldsForStatistics = ["end_date"];

  return stationStructureLayer.queryFeatures(query).then((response: any) => {
    const stats = response.features;

    // collect all dates for each viaduct type
    const data = stats.map((result: any) => {
      const attributes = result.attributes;
      const date = attributes.end_date;

      const dwall = attributes.total_complete_dwall;
      const column = attributes.total_complete_column;
      const slab = attributes.total_complete_slab;
      const kingpost = attributes.total_complete_kingpost;
      const secant = attributes.total_complete_secant;
      const columnhead = attributes.total_complete_secant;

      // comdwall in object
      return Object.assign(
        {},
        {
          date,
          dwall: dwall,
          column: column,
          slab: slab,
          kingpost: kingpost,
          secant: secant,
          columnhead: columnhead,
        },
      );
    });
    return data;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    const num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
}

export function zoomToLayer(layer: any, view: any) {
  return layer.queryExtent().then((response: any) => {
    view
      ?.goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch((error: any) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });
  });
}

export const defineActions = (event: any) => {
  const item = event.item;
  if (item.layer.type !== "group") {
    item.panel = {
      content: "legend",
      open: true,
    };
  }
  item.title === "TBM Tunnel Segment"
    ? (item.visible = false)
    : (item.visible = true);
};
