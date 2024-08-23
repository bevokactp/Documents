import React from 'react';
import TriclinicParallelepiped from './figures/TriclinicParallelepiped';
import MonoclinicPrism from './figures/MonoclinicPrism';
import OrthorhombicCuboid from './figures/OrthorhombicCuboid';
import Cylinder from './figures/Cylinder';

import Tetrahedron from './figures/Tetrahedron';
import Octahedron from './figures/Octahedron';
import TetragonalPrism from './figures/TetragonalPrism';
import Dodecahedron from './figures/Dodecahedron';
import Icosahedron from './figures/Icosahedron';
import Rhombohedron from './figures/Rhombohedron';
import HexagonalPrism from './figures/HexagonalPrism';
import Torus from './figures/Torus';
import Cone from './figures/Cone';

import Hexahedron from './figures/Hexahedron';
import Cuboctahedron from './figures/Cuboctahedron';
import TetrakisHexahedron from './figures/TetrakisHexahedron';
import Sphere from './figures/Sphere';


const App = () => (
	<div style={{ padding: '20px' }}>

		<div style={{ padding: '20px' }}>
			<h1>3D Shapes with Symmetry Information</h1>

			<div style={{ textAlign: 'center' }}>
				<h2>Высшая степень симметрии</h2>
				<div>
					<h3>Кубическая симметрия</h3>
					<Hexahedron />
					<Cuboctahedron />
					<TetrakisHexahedron />
					<p>
						<strong>1. Кубическая симметрия</strong><br />
						- Фигуры: Гексаэдр, тетракосиододекаэдр, кубооктаэдр<br />
						- Оси симметрии: 4 (через середины граней и углы), 6 (через середины рёбер)<br />
						- Плоскости симметрии: 9 (включая плоскости через грани и диагонали)<br />
						- Длины рёбер: Все рёбра равны<br />
						- Углы между рёбрами: <code>90&deg;</code>
					</p>
				</div>

				<div>
					<h3>Шар (сфера)</h3>
					<Sphere />
					<p>
						<strong>2. Шар (сфера)</strong><br />
						- Оси симметрии: Бесконечно много (все радиусы от центра к точкам на поверхности)<br />
						- Плоскости симметрии: Бесконечно много (все плоскости через центр сферы)<br />
						- Радиус: <code>r</code>
					</p>
				</div>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<div style={{ textAlign: 'center' }}>
					<h2>Средняя степень симметрии</h2>

					<div>
						<h3>Тетрагональная симметрия</h3>
						<Tetrahedron />
						<Octahedron />
						<TetragonalPrism />
						<p>
							<strong>1. Тетрагональная симметрия</strong><br />
							- Фигуры: Тетрагональная призма, октаэдр, тетраэдр<br />
							- Оси симметрии: 4 (вдоль осей, проходящих через вершины тетраэдра)<br />
							- Плоскости симметрии: 6 (плоскости, проходящие через середины рёбер)<br />
							- Длины рёбер: <code>a</code>, <code>b</code> (где <code>a</code> — длина рёбер в основании, <code>b</code> — высота призмы)<br />
							- Углы между рёбрами: <code>90&deg;</code>, углы в вершинах определяются по типу призмы
						</p>
					</div>

					<div>
						<h3>Тригональная ромбоэдрическая симметрия</h3>
						<Dodecahedron />
						<Icosahedron />
						<Rhombohedron />
						<p>
							<strong>2. Тригональная ромбоэдрическая симметрия</strong><br />
							- Фигуры: Ромбоэдр, додекаэдр, икосаэдр<br />
							- Оси симметрии: 6 (для ромбоэдра), 10 (для додекаэдра), 15 (для икосаэдра)<br />
							- Плоскости симметрии: 3 (для ромбоэдра), 15 (для додекаэдра), 20 (для икосаэдра)<br />
							- Длины рёбер: Все рёбра равны в пределах фигуры<br />
							- Углы между рёбрами: Зависит от типа фигуры
						</p>
					</div>

					<div>
						<h3>Гексагональная симметрия</h3>
						<HexagonalPrism />
						<p>
							<strong>3. Гексагональная симметрия</strong><br />
							- Фигура: Гексагональная призма<br />
							- Оси симметрии: 6 (вдоль оси призмы и через середины рёбер основания)<br />
							- Плоскости симметрии: 3 (через вершины основания и высоту призмы)<br />
							- Длины рёбер: <code>a</code> (основание), <code>h</code> (высота)<br />
							- Углы между рёбрами: <code>120&deg;</code> в основании
						</p>
					</div>

					<div>
						<h3>Тор</h3>
						<Torus />
						<p>
							<strong>4. Тор</strong><br />
							- Оси симметрии: Нет чётко определённых осей, но можно рассматривать ось вращения<br />
							- Плоскости симметрии: Несколько, в зависимости от формы тора<br />
							- Радиус окружности: <code>R</code><br />
							- Радиус сечения: <code>r</code>
						</p>
					</div>

					<div>
						<h3>Конус</h3>
						<Cone />
						<p>
							<strong>5. Конус</strong><br />
							- Оси симметрии: 1 (осевая симметрия)<br />
							- Плоскости симметрии: Несколько (через ось конуса)<br />
							- Радиус основания: <code>r</code><br />
							- Высота: <code>h</code>
						</p>
					</div>

				</div>
			</div>
		</div>

		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div style={{ textAlign: 'center' }}>
				<h2>Низшая степень симметрии</h2>
				<div>
					<TriclinicParallelepiped />
					<p>
						<strong>1. Триклинная симметрия</strong><br />
						- Фигура: Параллелепипед<br />
						- Оси симметрии: Нет<br />
						- Плоскости симметрии: Нет<br />
						- Длины рёбер: <code>a</code>, <code>b</code>, <code>c</code><br />
						- Углы между рёбрами: <code>&alpha;</code>, <code>&beta;</code>, <code>&gamma;</code>
					</p>
				</div>
				<div>
					<MonoclinicPrism />
					<p>
						<strong>2. Моноклинная симметрия</strong><br />
						- Фигура: Моноклинный параллелепипед или призма с параллелограммом в основании<br />
						- Оси симметрии: Нет<br />
						- Плоскости симметрии: Одна (перпендикулярная к одной из граней)<br />
						- Длины рёбер: <code>a</code>, <code>b</code>, <code>c</code><br />
						- Углы между рёбрами: Один угол равен <code>90&deg;</code>, остальные не равны <code>90&deg;</code>
					</p>
				</div>
				<div>
					<OrthorhombicCuboid />
					<p>
						<strong>3. Орторомбическая симметрия</strong><br />
						- Фигура: Кубоид (ортогональный прямоугольный параллелепипед)<br />
						- Оси симметрии: 3 (через середины противоположных рёбер)<br />
						- Плоскости симметрии: 3 (перпендикулярные к граням)<br />
						- Длины рёбер: <code>a</code>, <code>b</code>, <code>c</code><br />
						- Углы между рёбрами: Все углы равны <code>90&deg;</code>
					</p>
				</div>
				<div>
					<Cylinder />
					<p>
						<strong>4. Цилиндр</strong><br />
						- Оси симметрии: 1 (осевая симметрия)<br />
						- Плоскости симметрии: Несколько (плоскости, проходящие через ось симметрии)<br />
						- Радиус основания: <code>r</code><br />
						- Высота: <code>h</code>
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default App;
