import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/input';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const scheduleItems = [
        { week_day: 0, from: '8:00 AM', to: '4:00 PM'},
        { week_day: 2, from: '10:00 AM', to: '6:00 PM'},
    ]
    return (
        <div id="page-teacher-form" className='container'>
            <PageHeader
                title='Que incrível que você quer dar aulas.'
                description='O primeiro passo é preencher esse formulário de inscrição.'
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name='name' label='Nome completo' />
                    <Input name='avatar' label='Avatar' />
                    <Input name='whatsapp' label='Whatsapp' />
                    <Textarea name='bio' label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name='subject'
                        label='Matéria'
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Input name='cost' label='Custo da sua hora por aula' />
                </fieldset>
                <fieldset>
                    <legend>Horários disponíveis
                        <button type='button'>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div className="schedule-item">
                        <Select
                            name='week_day'
                            label='Dia da Semana'
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feira' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sábado' },
                            ]}
                        />
                        <Input type="time" label="Das" name="from" />
                        <Input type="time" label="Até" name="to" />
                    </div>
                        )
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;