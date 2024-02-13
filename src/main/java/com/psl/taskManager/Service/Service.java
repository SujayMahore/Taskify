package com.psl.taskManager.Service;

import java.util.List;

import com.psl.taskManager.Model.Task;

public interface Service {

	
	Task addTask(Task task);
	List<Task> getTask();

}
