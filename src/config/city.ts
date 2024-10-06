export type CityKey = 'all' | 's' | 'k';

export interface RegionInfo {
	label: string;
	towns: string[];
}

export interface RegionDataType {
	all: RegionInfo;
	s: RegionInfo;
	k: RegionInfo;
}
export const regionData = {
	all: {
		label: '시/도',
		towns: [],
	},
	s: {
		label: '서울 특별시',
		towns: [
			'강남구',
			'강동구',
			'강북구',
			'강서구',
			'관악구',
			'광진구',
			'구로구',
			'금천구',
			'노원구',
			'도봉구',
			'동대문구',
			'동작구',
			'마포구',
			'서대문구',
			'서초구',
			'성동구',
			'성북구',
			'송파구',
			'양천구',
			'영등포구',
			'용산구',
			'은평구',
			'종로구',
			'중구',
			'중랑구',
		],
	},
	k: {
		label: '경기도',
		towns: [
			'고양시',
			'과천시',
			'광명시',
			'광주시',
			'구리시',
			'군포시',
			'김포시',
			'남양주시',
			'동두천시',
			'부천시',
			'성남시',
			'수원시',
			'시흥시',
			'안산시',
			'안성시',
			'안양시',
			'양주시',
			'오산시',
			'용인시',
			'의왕시',
			'의정부시',
			'이천시',
			'파주시',
			'평택시',
			'포천시',
			'하남시',
			'화성시',
			'가평군',
			'양평군',
			'여주군',
			'연천군',
		],
	},
} as Record<CityKey, RegionInfo>;
