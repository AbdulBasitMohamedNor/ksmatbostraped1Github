var mongoose = require('mongoose');

var KsSchema = new mongoose.Schema(
  {

  'Identification': {

    'Process ID': String,
    'Config ID': String,
    'System ID': String,
    'Recipe Version': String,
  },
    'Recipe Property': {

        'Comment': String,
        'Icon': String,
        'Type': String,
        'Usage': String,
        'Manufacturing Adjustments': [],
    },
    'Process Sequence': [{

        'Sequence Number': Number,
        'Module Type': String,
        'Module Number': Number,
    }],
    'Process Step Repetition': [],
    'Pretreatment': {

        'References': {

            'Bake Module': Number,
            'Sequencer Module': Number,
            'QMG Module': Number,
            'Limit Module': Number,
        },
        'Parameter': {

            'GSM': {

                'Spectral Recipe': String,
            },
            'Optical Sputter': {

                'WFG Recipe': String,
                'Targetlife Adjustment Recipe': String,
                'OTM': {

                    'Recipe': String,
                    'Dome Partition': Number,
                    'Segments Definition1': Number,
                    'Segments Definition2': Number,
                    'Substratum Thickness': Number,
                    'Recipe Format ID': String,
                },
                'GSMBB': {

                    'TGC Calibration Check': Boolean,
                },
            },
            'General': {

                'Glow Current': Number,
                'Go to Wait': Boolean,
                'Xtal Run Criterion': String,
                'Runs Per Xtal': Number,
                'No of Res Xtals': Number,
                'Global Frequency Limit': Number,
                'Max Run Counter': Number,
                'Rotation': {

                    'Direction': String,
                    'Setpoint': Number,
                },
                'Flexidome': {

                    'Function': String,
                    'Setpoint': Number,
                    'Velocity': Number,
                },
            },
            'Vacuum': {

                'PC-Water': String,
                'Pump Timeout': Number,
                'Bake Start Pressure': Number,
                'Max Pressure': Number,
                'SC-Pressure End': Number,
                'Reload IonGun-Water': String,
                'Meissner': {

                    'Start Pressure': Number,
                    'Delay Time': Number,
                    'Cool Down Time': Number,
                    'Cool Done Temperature': Number,
                },
            },
        },
    },
    'Posttreatment': {

        'References': {

            'Partial Vent 1': Number,
            'Partial Vent 2': Number,
            'Partial Vent 3': Number,
            'Sequencer Module': Number,
        },
        'Parameter': {

            'Final Vent Time': Number,
            'Vent Stop': Boolean,
            'Unload Before Vent': Boolean,
            'Vacuum Cool': {

                'Temperature': Number,
                'Heat Delay': Number,
                'Time': Number,
            },
            'Reload': {

                'PC-Water': String,
                'IonGun-Water': String,
            },
        },
        'Partial Vent': {

            'Partial Vent 1': {

                'Water Mode': String,
                'Temperature': Number,
                'Time': Number,
            },
            'Partial Vent 2': {

                'Water Mode': String,
                'Temperature': Number,
                'Time': Number,
            },
            'Partial Vent 3': {

                'Water Mode': String,
                'Temperature': Number,
                'Time': Number,
            },
        },
    },
    'Heater': [{

        'Identification': {

            'Module number': Number,
        },
        'Parameter': {

            'Approach': Number,
            'PID Control': {

                'Gain': Number,
                'Integration Time': Number,
                'Derivative Time': Number,
            },
            'Zones': [],
        },
    }],
    'Bake': [{

        'Identification': {

            'Module Number': Number,
            'Module Name': String,
            'Module Definition State': String,
        },
        'Parameter': {

            'Setpoint 1': Number,
            'Setpoint 2': Number,
            'Setpoint 3': Number,
            'Setpoint 4': Number,
            'Bakeout Time': Number,
            'Bake Delay': Number,
            'Ramp Time': Number,
            'Max Rise Time': Number,
            'Evacuation': {

                'Pressure': Number,
                'Temperature': Number,
            },
        },
    }],
    'Clean': [],
    'Deposition': [],
    'Layer': [{

        'Identification': {

            'Module Number': Number,
            'Module Name': String,
            'Module Definition State': String,
        },
        'References': {

            'Rate Module 1': Number,
            'Rate Module 2': Number,
            'Rate Module 3': Number,
            'Rate Module 4': Number,
            'Rate Module 5': Number,
            'Rate Module 6': Number,
            'Rate Module 7': Number,
            'Rate Module 8': Number,
            'Rate Module 9': Number,
            'Rate Module 10': Number,
            'Rate Module 11': Number,
            'Rate Module 12': Number,
            'RVG Module 1': Number,
            'RVG Module 2': Number,
            'RVG Module 3': Number,
            'RVG Module 4': Number,
            'Bake Module': Number,
            'Sequencer Module': Number,
            'GSM Module': Number,
            'QMG Module': Number,
            'Limit Check Module': Number,
            'Ion Source Module': Number,
        },
        'Parameter': {

            'General': {

                'Evaporation Time': Number,
                'Thickness': Number,
                'Cup Temp': Number,
                'Delta Temp': Number,
                'Min Gradient Time': Number,
                'Temperature Reference Value': String,
                'GoTo Wait': Boolean,
                'Max Layer Timeout': Boolean,
                'Rotation': {

                    'Direction': String,
                    'Setpoint': Number,
                },
                'Source Temperature Control': {

                    'Low Limit': Number,
                    'High Limit': Number,
                },
                'Flexidome': {

                    'Function': String,
                    'Setpoint': Number,
                    'Velocity': Number,
                },
                'Feeder': {

                    'Feed Time 1': Number,
                    'Feed Time 2': Number,
                },
                'Material Consumption': {

                    'Rate 1': Number,
                    'Rate 2': Number,
                    'Rate 3': Number,
                    'Rate 4': Number,
                    'Rate 5': Number,
                    'Rate 6': Number,
                    'Rate 7': Number,
                    'Rate 8': Number,
                    'Rate 9': Number,
                    'Rate 10': Number,
                    'Rate 11': Number,
                    'Rate 12': Number,
                },
            },
            'GSM': {

                'Lower Thickness Deviation': Number,
                'Upper Thickness Deviation': Number,
            },
        },
        'Extended': {

            'Used': Boolean,
            'Filament Permanent': Boolean,
            'Plasma Lead Time': Number,
            'Ion Plating': [],
        },
    }],
    'Rate':[{

        'Identification': {

            'Module Number': Number,
            'Module Name': String,
            'Module Definition State': String,
        },
        'References': {

            'Source Module': Number,
        },
        'Parameter': {

            'General': {

                'Rate': Number,
                'Ramp Time': Number,
                'Control Gain': Number,
                'Tooling Factor': Number,
                'Power Limit': Number,
                'Wait Power': Number,
                'Source Cool Time': Number,
                'Rate Used': String,
                'End Criterion': String,
                'Shutter Open': Boolean,
                'Rate Sigma': {

                    'Limit': Number,
                    'Alarm Category': Number,
                    'Start Delay': Number,
                    'Timeout': Number,
                    'On Limit': String,
                },
            },
            'Sentinel': {

                'Rate New Value': Number,
                'Start Thickness': Number,
                'Soak Time': [],
                'Thickness': Number,
                'Damp': Number,
                'PMT': {

                    'Range': Number,
                    'Calibration': Number,
                },
                'Density': Number,
                'Z Ratio': Number,
                'Xtal Measurement': Boolean,
                'Setpoint Thickness': Number,
                'IO Definition Reference': Number,
                'Filter Number': Number,
                'Calibration': {

                    'Interval': Number,
                    'Accuracy': Number,
                    'Automatic': Boolean,
                },
            },
        },
        'Ramping': {

            'Rise Delay': Number,
            'Ramp 1': {

                'Time': Number,
                'Power': Number,
            },
            'Ramp 2': {

                'Time': Number,
                'Power': Number,
            },
            'Ramp 3': {

                'Time': Number,
                'Power': Number,
            },
            'Hold': {

                'Time': Number,
                'Power': Number,
            },
        },
        'Coating Ramp': {

            'Control Mode': String,
            'Final Ramp Value': Number,
            'Ramp Time': Number,
        },
        'Deposition ParamSet':[{

            'Identification': {

                'Module Number': Number,
                'Module Name': String,
                'Module Type': String,
            },
            'Parameter': {

                'Q-Factor': Number,
                'S-Factor': Number,
            },
        }],
        'Monitoring': {

            'Mode': String,
            'Alarm Category': Number,
            'Shutter Open Rate': Number,
        },
    }],
    'Source':[{

        'Identification': {

            'Module Number': Number,
            'Module Name': String,
            'Module Definition State': String,
        },
        'References': {

            'EEC Module': String,
        },
        'Parameter': {

            'Source Number': Number,
            'Shutter Moving': String,
            'Distribution Shield': Number,
            '2nd Shutter Lead Delay': Number,
        },
        'Xtal': {

            'Response Time': Number,
            'Density': Number,
            'Shutter Delay': Number,
            'Xtal Holder Number': Number,
            'Xtal Number': Number,
            'Min Frequency': Number,
            'Z Match': Number,
            'Freq Corr': Number,
            'Derivative Time': Number,
            'Q Factor': Number,
            'S Factor': Number,
            'Chopper Factor Used': Boolean,
            'Backup': [],
            'Monitoring': {

                'Xtal Holder Nr': Number,
                'Tooling Factor': Number,
                'Min Frequency': Number,
            },
        },
        'EGun': {

            'Parameter Code': Number,
            'Wehnelt High': Boolean,
            'Wobble Code': Number,
            'Material': String,
            'Focus': {

                'Code': Number,
                'Control On': Boolean,
                'Sweep High': Boolean,
            },
        },
        'Feed': {

            'Feeder Number': Number,
            'Forward Time': Number,
            'Back Time': Number,
            'During Coating': Boolean,
        },
    }],
    'Sputter': [],
    'Power': [],
    'Reactive': [],
    'Vacuum': [],
    'RVG': [],
    'Limit Check': [{

        'Identification': {

            'Module Number': Number,
            'Module Name': String,
            'Module Definition State': String,
        },
        'Check Point': [{

            'Check Number': Number,
            'Element Type': String,
            'Device Number': Number,
            'Low Limit': Number,
            'High Limit': Number,
            'Timeout': Number,
            'Start Delay': Number,
            'Alarm Category': Number,
            'Substate': String,
            'Element Name': String,
            'Delta': Boolean,
            'Delta Time': Number,
        }],
    }],
    'GSM': [],
    'Ion Source': [],
    'Ios Parameter Set': [],
    'QMG': [],
    'PEM': [],
    'Sequencer': [],
    'Sequencer Parameter': [],
    'Entry Action': [],
    'Supervision': [],
    'User': [],


});

module.exports = mongoose.model('Ks', KsSchema);
/* var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema); */
