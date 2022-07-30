import React, { useEffect, useState } from 'react';
import { ContainerCategory } from './styles/ContainerCategory.styled';
import { ContainerCategoryFlex } from './styles/ContainerCategoryFlex.styled';
import { ContainerCreateForm } from './styles/ContainerCreateForm.styled';
import { CHeader, CreateButton, CreateHeader, CreateInput } from './styles/CreateForm.styled';
import { Flex } from './styles/Flex.styled';
import { Create, Search } from './styles/SearchCreateItems';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TitleDeleteFlex } from './styles/TitleDeleteFlex.styled';
import { Alink } from './styles/Alink.stiled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TodoContainer } from './styles/TodoContainer.styled';
import { ButtonFlex } from './styles/ButtonFlex.styled';


const SearchCreate = () => {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [addIsShown, setAddIsShown] = useState(false);

    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("list");
        if (savedList) {
            return JSON.parse(savedList);
        } else {
            return [];
        }
    });

    const [todos, setTodos] = useState(() => {
        const savedTodo = localStorage.getItem("todo");
        if (savedTodo) {
            return JSON.parse(savedTodo);
        } else {
            return [];
        }
    });



    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAddChange = (event) => {
        setTodo(event.target.value);
    }

    const handleCreate = (event) => {
        event.preventDefault();

        if (title === "") {
            alert("Title cannot be empty!!!");
        } else {
            setList([
                ...list,
                {
                    id: list.length,
                    text: title.trim(),
                    todo: [],
                }
            ]);
        }
    }
    function handleAdd (event) {
        event.preventDefault();
        const key = localStorage.getItem("key");
        
        if (todo === "") {
        } else {
            setTodos([
                ...todos,
                {
                    id: todos.length,
                    for: key,
                    text: todo.trim()
                }
            ]);
            let objId;
            let todoText;
            todos.map(obje => {
                todoText = obje.text;
            });
            const Arr = list.map(obj => {
                objId = obj.id.toString()
                if (objId === key) {
                    return { ...obj, todo: obj.todo.concat(todoText) };
                }
                return (obj);

            });

            localStorage.setItem('list', JSON.stringify(Arr));

        }
    }

    const handleDelete = (event,key) => {
        event.preventDefault();
        list.splice(key, 1);
        
        const newArr = list.map(obj => {
            if (obj.id > key) {
                return { ...obj, id: obj.id - 1 };
            }
            return (obj);
        });
        localStorage.setItem('list', JSON.stringify(newArr));
    };

    const handleClick = (event) => {
        setIsShown(current => !current);
    };
    const handleAddClick = ((event, key) => {
        event.preventDefault();
        setAddIsShown(current => !current);
        localStorage.setItem('key', key);
    });
    const handleCancelClick = (event) => {
        setAddIsShown(current => !current);
    };

    return (
        <>
            <Flex>
                <Search type="text" placeholder="&#xF002; Search" />
                <Create onClick={handleClick}>
                    + New Category
                </Create>
            </Flex>
            {isShown && <ContainerCreateForm >
                <CreateHeader>
                    Create a new category
                </CreateHeader>
                <CreateInput type="text" placeholder="Enter Your Category Title" onChange={handleChange} value={title} />
                <ButtonFlex>
                    <CreateButton onClick={handleClick}>
                        Cancel
                    </CreateButton>
                    <CreateButton onClick={handleCreate}>
                        Create
                    </CreateButton>
                </ButtonFlex>
            </ContainerCreateForm>}
            <ContainerCategoryFlex>
                {list.map((object) => (
                    <ContainerCategory>
                        <TitleDeleteFlex >
                            <CHeader>{object.text}</CHeader>
                            <div>
                                <Alink  href='#' key={object.id} onClick={event => handleAddClick(event, object.id)}><AddCircleIcon style={{color: 'green'}} /></Alink>
                                <Alink href="delete"><DeleteForeverIcon key={object.id} onClick={event => handleDelete(event, object.id)}  style={{color: 'red'}} /></Alink>
                            </div>
                        </TitleDeleteFlex>
                        {addIsShown && <ContainerCreateForm >
                            <CreateHeader>
                                Create Todo
                            </CreateHeader>
                            <CreateInput type="text" placeholder="Enter Your Todo" onChange={handleAddChange} value={todo} />
                            <ButtonFlex>
                                <CreateButton onClick={handleCancelClick}>
                                    Cancel
                                </CreateButton>
                                <CreateButton onClick={event => handleAdd(event)}>
                                    Add
                                </CreateButton>
                            </ButtonFlex>
                        </ContainerCreateForm>}
                        <TodoContainer>
                            <CreateHeader>
                                {object.todo}
                            </CreateHeader>
                        </TodoContainer>
                    </ContainerCategory>
                ))}
            </ContainerCategoryFlex>
        </>
    );
}

export default SearchCreate;