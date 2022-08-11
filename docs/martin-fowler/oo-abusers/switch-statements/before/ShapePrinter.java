package fowler.oo_abusers.switch_statements.before;

public class ShapePrinter {
	public void print(String shape, int size){
		if(shape.equalsIgnoreCase("square")){
			for(int i = 0; i < size; i++){
				for(int j = 0; j < size; j++){
					System.out.print("*");
				}
				System.out.println("");
			}
		} else if(shape.equalsIgnoreCase("triangle")){
			for(int i = 1; i <= size; i++){
				for(int j = 0; j < i; j++){
					System.out.print("*");
				}
				System.out.println("");
			}
		} else {
			System.out.println("invalid shape");
		}
	}
}
