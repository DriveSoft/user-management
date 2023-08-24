import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import optionIcon from "./assets/optionsIcon.svg";
import "./Header.css";

interface HeaderProps {
	title: string;
	searchBar: boolean;
	buttonIcon: "add" | "options";
	onSearch?: (query: string) => void;
	onClickButton?: () => void;
}

export default function Header({
	title,
	searchBar,
	buttonIcon,
	onClickButton,
	onSearch,
}: HeaderProps) {
   const [searchQuery, setSearchQuery] = useState('');

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value); 
      onSearch?.(event.target.value);
   }

	return (
		<div className="header">
			<Container>
				<div className="row h-100">
					<div className="col-lg-6 h-100 position-relative d-flex justify-content-center">
						<div className="header__title">{title}</div>
						{buttonIcon === "add" ? (
							<div
								className="header__button header__button--add"
								onClick={() => onClickButton?.()}
							>
								+
							</div>
						) : (
							<div className="header__button header__button--options">
								<img src={optionIcon} width="32px" alt="" />
							</div>
						)}
					</div>

					<div className="col-lg-6 mt-3 d-flex justify-content-end">
						{searchBar && (
							<div className="me-0">
								<input
									type="text"
									value={searchQuery}
									onChange={onChange}
									className="header__search-bar form-control"
									placeholder="Type to filter the table"
								/>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}
