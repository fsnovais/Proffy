import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'
import Input from '../../components/input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className='container'>
            <PageHeader title='Este são os proffys disponíveis.'>
                <form id="search-teachers">
                <Select
                        name='subject'
                        label='Matéria'
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação Física', label: 'Educação Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Quimica', label: 'Quimica'},
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Sociologia', label: 'Sociologia'},
                            {value: 'Português', label: 'Português'},
                        ]}
                    />
                    <Select
                        name='week_day'
                        label='Dia da Semana'
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input type='time' name="time" label="Hora"/>
                </form>
                </PageHeader>

                <main>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                    <TeacherItem/>
                </main>
        </div>
    )
}

export default TeacherList;