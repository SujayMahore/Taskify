package com.psl.taskManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.psl.taskManager.Dao.TaskRepository;
import com.psl.taskManager.Model.Task;

@org.springframework.stereotype.Service 
public class ServiceImpl implements Service{

	@Autowired
	private TaskRepository taskRepo;
	
	@Override
	public Task addTask(Task task) {
		// TODO Auto-generated method stub
		System.out.println("We are here to");
		return taskRepo.save(task);
	}
	
	@Override
	public List<Task> getTask() {
		// TODO Auto-generated method stub
		return taskRepo.findAll();
	}

}
