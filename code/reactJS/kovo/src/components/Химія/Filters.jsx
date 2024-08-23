// Filters.jsx
import React from 'react';

const Filters = ({ filters, handleFilterChange }) => {
	return (
		<div className="filters">
			<label>
				State:
				<select name="state" onChange={handleFilterChange} value={filters.state}>
					<option value="все">Все</option>
					<option value="газ">Газ</option>
					<option value="жидкость">Жидкость</option>
					<option value="твердый">Твердый</option>
				</select>
			</label>
			<label>
				Металл:
				<input type="checkbox" name="isMetal" onChange={handleFilterChange} checked={filters.isMetal} />
			</label>
			<label>
				Полуметалл:
				<input type="checkbox" name="isMetalloids" onChange={handleFilterChange} checked={filters.isMetalloids} />
			</label>
			<label>
				Неметалл:
				<input type="checkbox" name="isNonMetal" onChange={handleFilterChange} checked={filters.isNonMetal} />
			</label>
			<label>
				Щелочной металл:
				<input type="checkbox" name="isAlkaliMetal" onChange={handleFilterChange} checked={filters.isAlkaliMetal} />
			</label>
			<label>
				Щелочноземельный металл:
				<input type="checkbox" name="isAlkalineEarthMetal" onChange={handleFilterChange} checked={filters.isAlkalineEarthMetal} />
			</label>
			<label>
				Галоген:
				<input type="checkbox" name="isHalogen" onChange={handleFilterChange} checked={filters.isHalogen} />
			</label>
			<label>
				Редкоземельный:
				<input type="checkbox" name="isRareEarth" onChange={handleFilterChange} checked={filters.isRareEarth} />
			</label>
			<label>
				Кислотный:
				<input type="checkbox" name="isAcidic" onChange={handleFilterChange} checked={filters.isAcidic} />
			</label>
			<label>
				Восстановитель:
				<input type="checkbox" name="isReducing" onChange={handleFilterChange} checked={filters.isReducing} />
			</label>
			<label>
				Окислитель:
				<input type="checkbox" name="isOxidizing" onChange={handleFilterChange} checked={filters.isOxidizing} />
			</label>
			<label>
				Органический:
				<input type="checkbox" name="isOrganic" onChange={handleFilterChange} checked={filters.isOrganic} />
			</label>
			<label>
				Неорганический:
				<input type="checkbox" name="isInorganic" onChange={handleFilterChange} checked={filters.isInorganic} />
			</label>
			<label>
				Стабилен:
				<input type="checkbox" name="isStable" onChange={handleFilterChange} checked={filters.isStable} />
			</label>
			<label>
				Радиоактивный:
				<input type="checkbox" name="isRadioactivity" onChange={handleFilterChange} checked={filters.isRadioactivity} />
			</label>
			<label>
				Разсеянный:
				<input type="checkbox" name="isDispersed" onChange={handleFilterChange} checked={filters.isDispersed} />
			</label>
			<label>
				Сверхпроводимость:
				<input type="checkbox" name="isSuperconductivity" onChange={handleFilterChange} checked={filters.isSuperconductivity} />
			</label>
			<label>
				Свертекучесть:
				<input type="checkbox" name="isFluidity" onChange={handleFilterChange} checked={filters.isFluidity} />
			</label>
		</div>
	);
};

export default Filters;
