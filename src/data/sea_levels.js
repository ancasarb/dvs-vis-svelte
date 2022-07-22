const seaLevels = [
	{
		rcp: '2.6',
		frequency: 'Permanent',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 9, interval: { start: 4, end: 15 } },
				coastal_dem: { value: 40, interval: { start: 20, end: 50 } }
			},
			2100: {
				srtm: { value: 20, interval: { start: 8, end: 37 } },
				coastal_dem: { value: 80, interval: { start: 40, end: 140 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 37, interval: { start: 32, end: 43 } },
				coastal_dem: { value: 150, interval: { start: 130, end: 160 } }
			},
			2100: {
				srtm: { value: 48, interval: { start: 36, end: 65 } },
				coastal_dem: { value: 190, interval: { start: 150, end: 250 } }
			}
		}
	},
	{
		rcp: '2.6',
		frequency: 'RL1',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 13, interval: { start: 6, end: 21 } },
				coastal_dem: { value: 50, interval: { start: 20, end: 70 } }
			},
			2100: {
				srtm: { value: 30, interval: { start: 13, end: 55 } },
				coastal_dem: { value: 90, interval: { start: 50, end: 150 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 78, interval: { start: 71, end: 86 } },
				coastal_dem: { value: 300, interval: { start: 270, end: 320 } }
			},
			2100: {
				srtm: { value: 95, interval: { start: 78, end: 120 } },
				coastal_dem: { value: 340, interval: { start: 300, end: 400 } }
			}
		}
	},
	{
		rcp: '4.5',
		frequency: 'Permanent',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 10, interval: { start: 5, end: 16 } },
				coastal_dem: { value: 40, interval: { start: 30, end: 60 } }
			},
			2100: {
				srtm: { value: 24, interval: { start: 11, end: 42 } },
				coastal_dem: { value: 90, interval: { start: 50, end: 150 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 38, interval: { start: 33, end: 44 } },
				coastal_dem: { value: 150, interval: { start: 140, end: 170 } }
			},
			2100: {
				srtm: { value: 52, interval: { start: 39, end: 70 } },
				coastal_dem: { value: 200, interval: { start: 160, end: 260 } }
			}
		}
	},
	{
		rcp: '4.5',
		frequency: 'RL1',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 14, interval: { start: 7, end: 22 } },
				coastal_dem: { value: 50, interval: { start: 30, end: 70 } }
			},
			2100: {
				srtm: { value: 35, interval: { start: 17, end: 65 } },
				coastal_dem: { value: 110, interval: { start: 60, end: 170 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 79, interval: { start: 72, end: 87 } },
				coastal_dem: { value: 300, interval: { start: 280, end: 320 } }
			},
			2100: {
				srtm: { value: 100, interval: { start: 82, end: 130 } },
				coastal_dem: { value: 360, interval: { start: 310, end: 420 } }
			}
		}
	},
	{
		rcp: '8.5',
		frequency: 'Permanent',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 11, interval: { start: 5, end: 17 } },
				coastal_dem: { value: 40, interval: { start: 30, end: 60 } }
			},
			2100: {
				srtm: { value: 32, interval: { start: 16, end: 57 } },
				coastal_dem: { value: 120, interval: { start: 70, end: 200 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 39, interval: { start: 33, end: 45 } },
				coastal_dem: { value: 150, interval: { start: 140, end: 170 } }
			},
			2100: {
				srtm: { value: 60, interval: { start: 44, end: 85 } },
				coastal_dem: { value: 230, interval: { start: 180, end: 310 } }
			}
		}
	},
	{
		rcp: '8.5',
		frequency: 'RL1',
		sea_level_projection_model: 'K14',
		marginal: {
			2050: {
				srtm: { value: 15, interval: { start: 8, end: 24 } },
				coastal_dem: { value: 50, interval: { start: 30, end: 80 } }
			},
			2100: {
				srtm: { value: 45, interval: { start: 25, end: 85 } },
				coastal_dem: { value: 140, interval: { start: 80, end: 210 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 80, interval: { start: 73, end: 89 } },
				coastal_dem: { value: 300, interval: { start: 280, end: 330 } }
			},
			2100: {
				srtm: { value: 110, interval: { start: 90, end: 150 } },
				coastal_dem: { value: 390, interval: { start: 330, end: 460 } }
			}
		}
	},
	{
		rcp: '2.6',
		frequency: 'Permanent',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 9, interval: { start: 1, end: 19 } },
				coastal_dem: { value: 40, interval: { start: 20, end: 60 } }
			},
			2100: {
				srtm: { value: 22, interval: { start: 4, end: 47 } },
				coastal_dem: { value: 80, interval: { start: 30, end: 170 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 37, interval: { start: 29, end: 47 } },
				coastal_dem: { value: 150, interval: { start: 130, end: 170 } }
			},
			2100: {
				srtm: { value: 50, interval: { start: 32, end: 75 } },
				coastal_dem: { value: 190, interval: { start: 140, end: 280 } }
			}
		}
	},
	{
		rcp: '2.6',
		frequency: 'RL1',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 12, interval: { start: 3, end: 26 } },
				coastal_dem: { value: 40, interval: { start: 10, end: 80 } }
			},
			2100: {
				srtm: { value: 32, interval: { start: 7, end: 75 } },
				coastal_dem: { value: 100, interval: { start: 30, end: 180 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 77, interval: { start: 68, end: 91 } },
				coastal_dem: { value: 290, interval: { start: 260, end: 330 } }
			},
			2100: {
				srtm: { value: 97, interval: { start: 72, end: 140 } },
				coastal_dem: { value: 350, interval: { start: 280, end: 430 } }
			}
		}
	},
	{
		rcp: '4.5',
		frequency: 'Permanent',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 10, interval: { start: 2, end: 20 } },
				coastal_dem: { value: 40, interval: { start: 20, end: 70 } }
			},
			2100: {
				srtm: { value: 36, interval: { start: 13, end: 82 } },
				coastal_dem: { value: 140, interval: { start: 60, end: 270 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 38, interval: { start: 30, end: 48 } },
				coastal_dem: { value: 150, interval: { start: 130, end: 180 } }
			},
			2100: {
				srtm: { value: 64, interval: { start: 41, end: 110 } },
				coastal_dem: { value: 250, interval: { start: 170, end: 380 } }
			}
		}
	},
	{
		rcp: '4.5',
		frequency: 'RL1',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 13, interval: { start: 3, end: 27 } },
				coastal_dem: { value: 50, interval: { start: 10, end: 80 } }
			},
			2100: {
				srtm: { value: 55, interval: { start: 19, end: 120 } },
				coastal_dem: { value: 150, interval: { start: 70, end: 260 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 78, interval: { start: 68, end: 92 } },
				coastal_dem: { value: 300, interval: { start: 260, end: 330 } }
			},
			2100: {
				srtm: { value: 120, interval: { start: 84, end: 180 } },
				coastal_dem: { value: 400, interval: { start: 320, end: 510 } }
			}
		}
	},
	{
		rcp: '8.5',
		frequency: 'Permanent',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 11, interval: { start: 3, end: 22 } },
				coastal_dem: { value: 40, interval: { start: 20, end: 70 } }
			},
			2100: {
				srtm: { value: 66, interval: { start: 28, end: 152 } },
				coastal_dem: { value: 230, interval: { start: 110, end: 410 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 39, interval: { start: 31, end: 50 } },
				coastal_dem: { value: 150, interval: { start: 130, end: 180 } }
			},
			2100: {
				srtm: { value: 94, interval: { start: 56, end: 180 } },
				coastal_dem: { value: 340, interval: { start: 220, end: 520 } }
			}
		}
	},
	{
		rcp: '8.5',
		frequency: 'RL1',
		sea_level_projection_model: 'K17',
		marginal: {
			2050: {
				srtm: { value: 16, interval: { start: 4, end: 30 } },
				coastal_dem: { value: 50, interval: { start: 20, end: 90 } }
			},
			2100: {
				srtm: { value: 105, interval: { start: 45, end: 200 } },
				coastal_dem: { value: 230, interval: { start: 130, end: 380 } }
			}
		},
		total: {
			2050: {
				srtm: { value: 81, interval: { start: 69, end: 95 } },
				coastal_dem: { value: 300, interval: { start: 270, end: 340 } }
			},
			2100: {
				srtm: { value: 170, interval: { start: 110, end: 260 } },
				coastal_dem: { value: 480, interval: { start: 380, end: 630 } }
			}
		}
	}
];

export default seaLevels;
