export default function transform(data) {

    const value2050MarginalSRTM = extractValues(data["2050_Marginal_SRTM"]);
    const value2050MarginalCoastalDEM = extractValues(data["2050_Marginal_CoastalDEM"]);

    const value2100MarginalSRTM = extractValues(data["2100_Marginl_SRTM"]);
    const value2100MarginalCoastalDEM = extractValues(data["2100_Marginal_CoastalDEM"]);

    const value2050TotalSRTM = extractValues(data["2050_Total_SRTM"]);
    const value2050TotalCoastalDEM = extractValues(data["2050_Total_CoastalDEM"]);

    const value2100TotalSRTM = extractValues(data["2100_Total_SRTM"]);
    const value2100MTotalCoastalDEM = extractValues(data["2100_Total_CoastalDEM"]);

    return {
        rcp: data["RCP"],
        frequency: data["Frequency"],
        sea_level_projection_model: data["Model"],

        marginal: {
            2050: {
                srtm: {
                    value: value2050MarginalSRTM.value,
                    interval: value2050MarginalSRTM.interval
                },
                coastal_dem: {
                    value: value2050MarginalCoastalDEM.value,
                    interval: value2050MarginalCoastalDEM.interval
                }
            },
            2100: {
                srtm: {
                    value: value2100MarginalSRTM.value,
                    interval: value2100MarginalSRTM.interval
                },
                coastal_dem: {
                    value: value2100MarginalCoastalDEM.value,
                    interval: value2100MarginalCoastalDEM.interval
                }
            }
        },
        total: {
            2050: {
                srtm: {
                    value: value2050TotalSRTM.value,
                    interval: value2050TotalSRTM.interval
                },
                coastal_dem: {
                    value: value2050TotalCoastalDEM.value,
                    interval: value2050TotalCoastalDEM.interval
                }
            },
            2100: {
                srtm: {
                    value: value2100TotalSRTM.value,
                    interval: value2100TotalSRTM.interval
                },
                coastal_dem: {
                    value: value2100MTotalCoastalDEM.value,
                    interval: value2100MTotalCoastalDEM.interval
                }
            }
        }
    };
}

const INTERVAL_REGEXP = /\((?<start>[0-9]+)–(?<end>[0-9]+)\)/;

function extractValues(data) {

    const values = data.split(" ");
    const value = parseInt(values[0], 10);

    const interval = values[1].match(INTERVAL_REGEXP).groups;

    return {
        value,
        interval: {
            start: parseInt(interval.start, 10),
            end: parseInt(interval.end, 10)
        }
    }
}